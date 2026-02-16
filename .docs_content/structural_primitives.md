# 📦 Structural & Core Primitives

**The Skeleton of Performance.**

Structural widgets in Fluxy are designed to provide the highest performance possible by utilizing the **Attribute Accumulation DSL**. Chaining 10 modifiers to a box results in exactly **one** physical widget in the tree, keeping your app fast and your memory clean.

---

## 💎 The Atomic Foundation

### 📦 Fx.box
The "Swiss Army Knife" of Fluxy. It replaces `Container`, `DecoratedBox`, `Padding`, `GestureDetector`, and `SizedBox` with a single, highly optimized primitive.

```dart
Fx.box()
  .square(100)
  .bg(Colors.indigo)
  .rounded(20)
  .shadow.lg
  .onTap(() => print("Punched!"))
  .child(Fx.text("Core").whiteText())
```

### 📋 Fx.list
A performant, reactive list builder that handles scrolling and lazy loading with minimal configuration.

```dart
Fx.list(
  itemCount: 100,
  gap: 12,
  itemBuilder: (context, index) => MessageCard(index),
)
```

---

## ⚡ Comparison: Standard vs. Fluxy

#### ❌ Standard Flutter (Extreme Nesting)
```dart
GestureDetector(
  onTap: () {},
  child: Container(
    width: 200,
    height: 200,
    padding: EdgeInsets.all(16),
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(16),
      boxShadow: [BoxShadow(blurRadius: 10, color: Colors.black12)],
    ),
    child: Center(child: Text("Fluxy rocks")),
  ),
)
```

#### ✅ Fluxy DSL (Flat & Fluent)
```dart
Fx.box()
  .size(200, 200)
  .p(16)
  .bg(Colors.white)
  .rounded(16)
  .shadow.md
  .center()
  .onTap(() {})
  .child(Fx.text("Fluxy rocks"))
```

---

## 🛠️ Visual FX Engine (New in 0.1.7)

Fluxy 0.1.7 introduces high-performance native modifiers for manipulating the visual state of any core primitive.

```dart
Fx.box()
  .bg(Colors.white.withOpacity(0.1))
  .blur(10)      // High-performance blur
  .grayscale()   // desaturation
  .circle()      // perfect clipping
```

---

## 🚧 Common "Gotchas" & Solutions

| Issue | Standard Flutter Pain | Fluxy Solution |
| :--- | :--- | :--- |
| **Widget Tree Bloat** | Every property = New Widget. | Attribute accumulation results in a flat tree. |
| **Recursive Shadows** | Stack overflow on multi-shadows. | Fixed in 0.1.6 via shadow proxy engine. |
| **Image Loading** | Manual `Image.network` handles. | `Fx.image()` with built-in shimmers. |
| **List Performance** | Rebuilding entire lists on change. | Fine-grained signal updates at the item level. |
