(ns user
  (:require [figwheel-sidecar.repl-api :as repl-api]))

(defn dev
  "Load and switch to the 'dev' namespace."
  []
  (require 'dev)
  (in-ns 'dev)
  :loaded)

(defn start-figwheel! []
  (repl-api/start-figwheel! "dev")) ;;"devcards-test"

(defn cljs-repl []
  (repl-api/cljs-repl "dev"))
