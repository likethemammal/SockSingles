(ns sock-singles.service
  (:require [sock-singles.util :as util :refer [gen-promise]]))

(enable-console-print!)

(def logged-in-user (atom nil))

(def firebase (js/Firebase. "https://sock-singles.firebaseio.com"))
(def users-ref (.child firebase "users"))


(defn save-user-info! [user]
  (let [user-ref (.child users-ref (.-username user))
        display-name (.-displayName user)
        avatar-url (.-avatar_url user)]
    (.set (.child user-ref "displayName") display-name)
    (.set (.child user-ref "avatarUrl") avatar-url)))

(defn github-login! []
  (let [promise (gen-promise)
        auth (js/FirebaseSimpleLogin. firebase (fn [err user]
                                                 (when err
                                                   (.reject promise err))
                                                 (when user
                                                   (reset! logged-in-user user)
                                                   (save-user-info! user)
                                                   (.resolve promise user))))]
    (.login auth "github")
    promise))

(defn is-logged-in? []
  (not (nil? @logged-in-user)))

(defn get-logged-in-user [] @logged-in-user)

(def githubLogin github-login!)

(defn get-firebase-ref [] firebase)
(defn get-users-ref [] users-ref)

(defn get-socks []
  (let [promise (gen-promise)]
    (.once users-ref "value"
           (fn [snapshot]
             (->>
              (.val snapshot)
              (js->clj)
              (mapcat
               (fn [[user user-data]]
                 (let [socks (get user-data "socks")]
                   (map (fn [[id sock]] (assoc sock :username user :id id)) socks))))
              (clj->js)
              (.resolve promise))))
    promise))

(comment

  (.done (get-socks) #(.log js/console %))

  (def marco-ref (.child users-ref "MarcoPolo"))
  (def other-ref (.child users-ref "likethemammal"))

  (.push marco-ref #js {:title "socky lol" :size "M"})
  (.push marco-ref #js {:title "Foo" :size "S"})

  (doseq [sock (map (comp clj->js #(dissoc % :username)) (sock-singles.simulated/get-socks 5))]
    (.push (.child (.child users-ref "MarcoPolo") "socks") sock))

  (.done (get-socks) #(.log js/console %))


  (.push other-ref #js {:title "My Best Sock" :size "S"})

  (.val marco-ref)
  (.on users-ref "child_added" (fn [s] (def k (.val s))))
  (.once users-ref "value" (fn [s] (def k (.val s))))
  (.off marco-ref)
  (.off users-ref)



 )
