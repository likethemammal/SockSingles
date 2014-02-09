(ns sock-singles.util
  (:require [clojure.string :as string]
            [clojure.set :as set]))

(defn gen-promise []
  (js/$.Deferred.))

(defn split-color [color]
  (let [color (subs color 1)]
    (map #(js/parseInt % 16)
         [(subs color 0 2)
          (subs color 2 4)
          (subs color 4 6)])))

(def color-threshold 150)

(defn color-distance [color1 color2]
  (let [colors1 (split-color color1)
        colors2 (split-color color2)]
    (->>
     (map (comp #(js/Math.pow % 2) -) colors1 colors2)
     (apply +)
     (js/Math.sqrt))))

(defn length-distance [length1 length2]
  (js/Math.abs (- length1 length2)))

(defn colorFilter [color1 color2]
  (> color-threshold
     (color-distance color1 color2)))

(defn lengthFilter [length1 length2 threshold]
  (> threshold
     (length-distance length1 length2)))

(defn ->vecs [arrays]
  (mapv js->clj arrays))

(defn intersect-vecs [vecs]
  (apply set/intersection
         (map set vecs)))

(defn intersectArrays [arrays]
  (-> arrays ->vecs intersect-vecs clj->js))
