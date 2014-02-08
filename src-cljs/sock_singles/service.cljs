(ns sock-singles.service
  (:require [sock-singles.util :as util :refer [gen-promise]]))

(enable-console-print!)

(def firebase (js/Firebase. "https://luminous-fire-8648.firebaseio.com"))
(def users-ref (.child firebase "users"))

(defn github-login! []
  (let [promise (gen-promise)
        auth (js/FirebaseSimpleLogin. firebase (fn [err user]
                                                 (when err
                                                   (.reject promise err))
                                                 (when user
                                                   (.resolve promise user))))]
    (.login auth "github")
    promise))

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
               (fn [[user socks]]
                 (map #(assoc % :username user) (vals socks))))
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
    (.push (.child users-ref "marlonlandaverde") sock))

  (.push other-ref #js {:title "My Best Sock" :size "S"})

  (.val marco-ref)
  (.on users-ref "child_added" (fn [s] (def k (.val s))))
  (.once users-ref "value" (fn [s] (def k (.val s))))
  (.off marco-ref)
  (.off users-ref)



 )
