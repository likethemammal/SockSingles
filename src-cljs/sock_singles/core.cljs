(ns sock-singles.core
  (:require [clojure.string :as string]
            [sock-singles.simulated :as sim]
            [sock-singles.service :as service]
            [sock-singles.util :as util]))

(enable-console-print!)

(def getSocks sim/getSocks)

;; Filters
(def colorFilter util/colorFilter)
(def lengthFilter util/lengthFilter)

;; Login
(def githubLogin service/github-login!)
