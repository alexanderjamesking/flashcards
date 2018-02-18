(defproject flashcards "0.1.0-SNAPSHOT"
  :description "TBC"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [yada "1.2.11"]
                 [integrant "0.6.3"]]
  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources"]
  :test-paths ["test/clj" "test/cljc"]
  :main ^:skip-aot flashcards.main
  :profiles {:uberjar {:aot :all}
             :repl {:repl-options {:init-ns user}}
             :dev {:source-paths ["dev/src"]
                   :resource-paths ["dev/resources"]
                   :dependencies [[integrant/repl "0.3.0"]]}})
