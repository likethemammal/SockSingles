(ns sock-singles.components
  (:require [sock-singles.util :as util :refer [gen-promise]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))


(defn widget [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/h1 nil (:text data)))))
