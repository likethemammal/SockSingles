(ns sock-singles.simulated
  (:require [sock-singles.util :as util :refer [gen-promise]]
            [sock-singles.parameters :as params]))

(enable-console-print!)

(defn random-color []
  (str
   "#"
   (.toString (rand-int 0xff) 16)
   (.toString (rand-int 0xff) 16)
   (.toString (rand-int 0xff) 16)))

(defn random-parameter [parameter-name]
  (->
   (filter #(= parameter-name (:name %)) params/parameters)
   first
   :values
   rand-nth))

(random-parameter :length)

(random-color)

(def stock-pictures
  ["http://i.imgur.com/K5bDhOb.jpg"
   "http://i.imgur.com/CW509KC.jpg"
   "http://i.imgur.com/OFBQvO7.jpg"
   "http://i.imgur.com/RCedKJi.jpg"
   "http://i.imgur.com/K0fTAc9.jpg"])

(def stock-usernames
  ["ElChupacabra" "MarcoPolo" "likethemammal" "MrManager"])

(def stock-titles
  ["Fuzzy Wuzzy" "Sock it to me it" "Linty Linda" "Sleepless in Sockeatlle" "Socker Star"])

(defn get-socks [count]
  (for [_ (range 5)]
    {:length (random-parameter :length)
     :color (random-color)
     :size (random-parameter :size)
     :image-path (rand-nth stock-pictures)
     :username (rand-nth stock-usernames)
     :title (rand-nth stock-titles)}))

(defn getSocks
  ([count]
   (let [promise (gen-promise)]
     (.resolve promise (clj->js (get-socks count)))
     promise))
  ([]
   (getSocks 10)))
