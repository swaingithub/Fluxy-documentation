// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"cli.mdx": () => import("../content/docs/cli.mdx?collection=docs"), "core-concepts.mdx": () => import("../content/docs/core-concepts.mdx?collection=docs"), "devtools.mdx": () => import("../content/docs/devtools.mdx?collection=docs"), "examples-gallery.mdx": () => import("../content/docs/examples-gallery.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "performance-model.mdx": () => import("../content/docs/performance-model.mdx?collection=docs"), "quick-start.mdx": () => import("../content/docs/quick-start.mdx?collection=docs"), "roadmap.mdx": () => import("../content/docs/roadmap.mdx?collection=docs"), "state-management.mdx": () => import("../content/docs/state-management.mdx?collection=docs"), "styling-system.mdx": () => import("../content/docs/styling-system.mdx?collection=docs"), "ui-dsl.mdx": () => import("../content/docs/ui-dsl.mdx?collection=docs"), }),
};
export default browserCollections;