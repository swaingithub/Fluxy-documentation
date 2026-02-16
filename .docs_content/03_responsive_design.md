# 📱 Section 3: Responsive Design

**One Codebase. Every Screen.**

Fluxy targets Mobile, Tablet, and Desktop with a unified Breakpoint System. It eliminates the need for manual `MediaQuery` checks.

---

## 🎭 Fx.layout (The Strategy Switcher)

Switch entire UI strategies based on the device type.

### ⚡ Side-by-Side Comparison

| Standard Flutter | Fluxy DSL |
| :--- | :--- |
| ```dart
LayoutBuilder(
  builder: (context, constraints) {
    if (constraints.maxWidth > 1200) {
      return DesktopView();
    } else if (constraints.maxWidth > 600) {
      return TabletView();
    }
    return MobileView();
  },
)
``` | ```dart
Fx.layout(
  mobile: MobileView(),
  tablet: TabletView(),
  desktop: DesktopView(),
)
``` |

---

## 📏 Responsive Modifiers

Apply specific styles per breakpoint directly in the widget chain.

### ⚡ Side-by-Side Comparison

| Standard Flutter | Fluxy DSL |
| :--- | :--- |
| ```dart
double width = MediaQuery.of(context).size.width;
Container(
  width: width > 1200 ? 800 : width > 600 ? 400 : double.infinity,
  child: Content(),
)
``` | ```dart
Fx.box()
  .width(xs: double.infinity, md: 400, lg: 800)
  .child(Content())
``` |

---

## 🕸️ Fx.grid.responsive

Automated column management for adaptive galleries.

### ⚡ Side-by-Side Comparison

| Standard Flutter | Fluxy DSL |
| :--- | :--- |
| ```dart
int cols = width > 1200 ? 4 : width > 600 ? 2 : 1;
GridView.count(
  crossAxisCount: cols,
  children: [ ... ],
)
``` | ```dart
Fx.grid.responsive(
  xs: 1, md: 2, lg: 4,
  children: [ ... ],
)
``` |
