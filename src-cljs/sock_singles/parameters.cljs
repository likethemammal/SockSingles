(ns sock-singles.parameters
  (:require [sock-singles.util :as util :refer [gen-promise]]))

(def parameters
  [{:name :length, :type :slider, :values (range 3 40)}
   {:name :size, :type :slider, :values ["S","M","L"]}
   {:name :color, :type :color}])
