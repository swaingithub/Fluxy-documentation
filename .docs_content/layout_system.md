# 🏗️ Next-Gen Layout System

**One Line. Perfect Alignment.**

Fluxy's Next-Gen Layout System is a high-performance, declarative engine for building complex UI hierarchies with zero friction. It replaces the verbose nested structures of standard Flutter with a clean, semantic DSL that mirrors modern flexbox principles.

---

## 💎 The Philosophy

Traditional Flutter layouts require constant wrapping in `Padding`, `Center`, or `Align`. Fluxy flips the script: **Alignment and Spacing are first-class properties of the container.**

### 🌪️ Fx.row & Fx.col
The bedrock of your UI. These aren't just wrappers; they are intelligent containers with built-in gap support and alignment shortcuts.

```dart
Fx.row(
  justify: MainAxisAlignment.spaceBetween, // Alignment via named params
  items: CrossAxisAlignment.center,         
  gap: 20,                                  // Intelligent gap injection
  children: [
    "Welcome".primaryBtn(),
    Fx.avatar(image: "...")
  ],
)
```

### 🕸️ Fx.grid
The most powerful grid engine in the Flutter ecosystem. Whether you need fixed columns or an auto-responsive masonry feel, `Fx.grid` handles the math so you can handle the design.

```dart
// Auto-Responsive: Fills columns based on screen width
Fx.grid.auto(
  minItemWidth: 150,
  gap: 16,
  children: products.map((p) => ProductCard(p)).toList(),
)
```

---

## ⚡ Why Fluxy? (The Showdown)

Standard Flutter code is optimized for the compiler. **Fluxy is optimized for the developer.**

#### ❌ Standard Flutter (15+ lines)
```dart
Padding(
  padding: const EdgeInsets.all(16.0),
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.stretch,
    children: [
      Text('Title', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
      SizedBox(height: 12),
      Text('Subtitle', style: TextStyle(color: Colors.grey)),
      SizedBox(height: 24),
      ElevatedButton(onPressed: () {}, child: Text('Submit')),
    ],
  ),
)
```

#### ✅ Fluxy DSL (5 lines)
```dart
Fx.col(gap: 12)
  .p(16)
  .center()
  .children([
    Fx.text('Title').font.xl().bold(),
    Fx.text('Subtitle').muted(),
    "Submit".primaryBtn().mt(12),
  ])
```

---

## 🛠️ Layout Intelligence (Structural Recursion)

Ever gotten the `Incorrect use of ParentDataWidget` error? Fluxy modifiers like `.expanded()`, `.flex()`, and `.shrink()` are **structurally aware**. They "peer through" layout containers to ensure the correct Flutter implementation is applied to the target widget.

```dart
Fx.row().children([
  Fx.text("Fixed Container"),
  Fx.box().expanded(), // No more "must wrap in Expanded" boilerplate
]);
```

---

## 🚧 Common "Gotchas" & Solutions

| Issue | Standard Flutter Pain | Fluxy Solution |
| :--- | :--- | :--- |
| **Space Distribution** | Manual `SizedBox` or `Spacer` injection. | Use the `gap` parameter in `Fx.row`/`Fx.col`. |
| **Grid Breakpoints** | Complex `LayoutBuilder` math. | `Fx.grid.responsive(xs: 1, md: 2, lg: 4)` |
| **Dynamic Spacing** | Hardcoded values. | `Fx.gap(Fx.space.md)` using design tokens. |
| **Overflows** | `RenderFlex` errors. | Chain `.shrink()` or use `Fx.scroll()` wrappers. |

---

## 🎨 Visual Preview

*Imagine a design with sleek, slate-colored layout blocks, emerald-green grid dots, and floating indigo code snippets showing the DSL's brevity.*
