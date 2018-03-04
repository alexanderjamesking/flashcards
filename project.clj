(defproject flashcards "0.1.0-SNAPSHOT"
  :description "TBC"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.5"]
                 [yada "1.2.11"]
                 [bidi "2.1.3"]
                 [kibu/pushy "0.3.8"]
                 [integrant "0.6.3"]
                 [hiccup "1.0.5"]
                 [environ "1.1.0"]]
  :plugins [[lein-cljsbuild "1.1.4" :exclusions [[org.clojure/clojure]]]
            [lein-doo "0.1.7"]]
  :hooks [leiningen.cljsbuild]
  :profiles {:uberjar {:aot :all}
             :repl {:repl-options {:init-ns user}}
             :dev {:source-paths ["dev/src"]
                   :resource-paths ["dev/resources"]
                   :dependencies [[integrant/repl "0.3.0"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [figwheel-sidecar "0.5.14"]]}
             :test {:plugins [[lein-test-report-junit-xml "0.2.0"]]}}
  :clean-targets ^{:protect false} ["target" "resources/public/cljs"]
  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources"]
  :test-paths ["test/clj" "test/cljc"]
  :figwheel {:server-logfile "target/figwheel_server.log"
             :css-dirs ["resources/public/css"]}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljc" "src/cljs"]
                        :figwheel true
                        :compiler {:main flashcards.core
                                   :asset-path "public/cljs/dev/out"
                                   :output-to "resources/public/cljs/dev/main.js"
                                   :output-dir "resources/public/cljs/dev/out"
                                   :source-map true
                                   :source-map-timestamp true}}
                       {:id "min"
                        :source-paths ["src/cljc" "src/cljs"]
                        :compiler {:main flashcards.core
                                   :output-to "resources/public/cljs/main.min.js"
                                   :output-dir "resources/public/cljs/min/out"
                                   :optimizations :advanced
                                   :pretty-print false}}]}
  :main ^:skip-aot flashcards.main
  :aliases {"build-cljs" ["do" "clean" ["cljsbuild" "once" "min"]]})
