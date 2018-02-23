(ns dev
  (:refer-clojure :exclude [test])
  (:require [clojure.repl :refer :all]
            [clojure.tools.namespace.repl :refer [refresh]]
            [clojure.java.io :as io]
            [integrant.core :as ig]
            [integrant.repl :refer [clear go halt prep init reset reset-all]]
            [flashcards.system :refer :all]
            [figwheel-sidecar.repl-api]))

(def config {:web-server {:port 3000
                          :app-js "/public/cljs/dev/main.js"}})

(integrant.repl/set-prep! (constantly config))
