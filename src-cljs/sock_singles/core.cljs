(ns sock-singles.core
  (:require [clojure.string :as string]
            [sock-singles.simulated :as sim]
            [sock-singles.util :as util]))

(enable-console-print!)

(def getSocks sim/getSocks)

;;Filters
(def colorFilter util/colorFilter)
(def lengthFilter util/lengthFilter)
