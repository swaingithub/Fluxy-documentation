// @ts-nocheck
import * as __fd_glob_21 from "../content/docs/ui-dsl.mdx?collection=docs"
import * as __fd_glob_20 from "../content/docs/styling.mdx?collection=docs"
import * as __fd_glob_19 from "../content/docs/styling-system.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/state-management.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/routing.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/roadmap.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/reactivity.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/quick-start.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/performance-model.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/ota-engine.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/fluxy-play.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/fluent-ui.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/examples.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/examples-gallery.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/devtools.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/core-concepts.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/cloud-builds.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/cli.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/architecture.mdx?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"architecture.mdx": __fd_glob_1, "cli.mdx": __fd_glob_2, "cloud-builds.mdx": __fd_glob_3, "core-concepts.mdx": __fd_glob_4, "devtools.mdx": __fd_glob_5, "examples-gallery.mdx": __fd_glob_6, "examples.mdx": __fd_glob_7, "fluent-ui.mdx": __fd_glob_8, "fluxy-play.mdx": __fd_glob_9, "index.mdx": __fd_glob_10, "installation.mdx": __fd_glob_11, "ota-engine.mdx": __fd_glob_12, "performance-model.mdx": __fd_glob_13, "quick-start.mdx": __fd_glob_14, "reactivity.mdx": __fd_glob_15, "roadmap.mdx": __fd_glob_16, "routing.mdx": __fd_glob_17, "state-management.mdx": __fd_glob_18, "styling-system.mdx": __fd_glob_19, "styling.mdx": __fd_glob_20, "ui-dsl.mdx": __fd_glob_21, });