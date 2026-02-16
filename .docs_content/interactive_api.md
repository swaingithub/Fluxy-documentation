# 🎮 Interactive & Button API

**Any Widget. Every Interaction.**

Fluxy 0.1.7 redefines buttons from "UI elements" to "Interaction States". With the **Atomic Interaction API**, you no longer build buttons; you *buttonize* your intent.

---

## 🚀 The Buttonizers

Why wrap a widget in a button when you can just make it one? Fluxy provides expressive extensions for `String` and `Widget`.

### 🔠 String Buttonizers
Rapid-fire button creation directly from your labels.

```dart
"Confirm".primaryBtn(onTap: () => save())
"Cancel".outlineBtn()
"Delete".dangerBtn()
```

### 🖼️ Widget Buttonizers
Turn any complex layout, icon, or image into a professional interactive component.

```dart
myBannerImage.btn(onTap: () => navigate()) // FxButtonVariant.none
searchIcon.btn()
```

---

## 💎 Custom Content Injection

Fluxy buttons use a **Content-First Architecture**. While they handle the hover, press, and focus logic internally, you have absolute control over the visual layout using the `.withChild()` modifier.

```dart
Fx.button("Loading")
  .withChild(
    Fx.row(gap: 8).children([
      Fx.loader.shimmer().square(18),
      Fx.text("Processing..."),
    ])
  )
```

---

## ⚡ Comparison: Standard vs. Fluxy

#### ❌ Standard Flutter (12+ lines)
```dart
ElevatedButton(
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.blue,
    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
    padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
  ),
  onPressed: () {},
  child: Row(
    mainAxisSize: MainAxisSize.min,
    children: [
      Icon(Icons.save),
      SizedBox(width: 8),
      Text("Save"),
    ],
  ),
)
```

#### ✅ Fluxy DSL (2 lines)
```dart
"Save".primaryBtn(onTap: () => save())
  .withIcon(Icon(Icons.save))
  .rounded(12)
```

---

## 🛠️ Interaction Primitives (`Fx.btn`)

Need building blocks for a custom Card, List Item, or Navigation Tile? `Fx.btn` provides the framework's hover/pressed logic with **zero prescribed styling**.

```dart
Fx.btn(
  onTap: () => select(),
  child: Fx.box()
    .p(16)
    .onHover((s) => s.bg(Colors.blue.withOpacity(0.1)))
    .children([...])
)
```

---

## 🚧 Common "Gotchas" & Solutions

| Issue | Standard Flutter Pain | Fluxy Solution |
| :--- | :--- | :--- |
| **Centering Issues** | Buttons fighting with `minWidth`. | Completely re-engineered centering engine in 0.1.7. |
| **Loading States** | Manual `Stack` or `Opacity` management. | Chain `.loading(true)` to auto-disable and swap content. |
| **Hover Feedback** | Complex `InkWell` + `SystemMouseCursor`. | Built-in high-performance hover proxies. |
| **Accessibility** | Semantic labels buried in properties. | Semantic-first API with `.label()` and `.tooltip()`. |
