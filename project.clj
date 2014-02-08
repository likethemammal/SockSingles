(defproject sock-singles "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]]

  :plugins [[lein-cljsbuild "1.0.2"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "sock-singles"
              :source-paths ["src-cljs"]
              :compiler {
                :output-to "cljs/sock_singles.js"
                :output-dir "cljs/out"
                :optimizations :simple
                :source-map "cljs/sock_singles.js.map"}}]})
