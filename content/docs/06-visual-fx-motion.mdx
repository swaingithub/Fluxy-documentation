# 🎬 Section 6: Visual FX & High-Motion API

**Cinematic Transitions. Native Performance.**

Fluxy 0.1.7 introduces a hardware-accelerated **Visual FX Engine**. We've moved animations from "Widget-wrapping" to "Attribute-chaining," enabling complex staged motion with almost zero code.

---

## 🌪️ Motion Modifiers (`.animate`)

Standard Flutter animations require `AnimationController`, `Tween`, and `AnimatedBuilder`. In Fluxy, it's a single line.

### ⚡ Side-by-Side Comparison

| Standard Flutter (30+ lines) | Fluxy DSL (1 line) |
| :--- | :--- |
| ```dart
AnimationController(vsync: this);
SlideTransition(
  position: animation,
  child: FadeTransition(
    opacity: animation,
    child: MyWidget(),
  ),
)
``` | ```dart
Fx.box()
  .animate(
    fade: 0.0, 
    slide: Offset(0, 20),
    duration: 500.ms
  )
``` |

---

## 💎 Visual Filters (Blur & Grayscale)

Apply cinematic effects to any container without specialized clipping widgets.

### ⚡ Side-by-Side Comparison

| Standard Flutter | Fluxy DSL |
| :--- | :--- |
| ```dart
BackdropFilter(
  filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
  child: Container(color: Colors.white10),
)
``` | ```dart
Fx.box()
  .bg(Colors.white10)
  .blur(10)
  .grayscale() // Optional desaturation
``` |

---

## ⚡ Staggered Lists (`.stagger`)

Creating a landing page with "entry reveal" animations usually requires manual delay math. Fluxy handles the indexing for you.

```dart
Fx.col().children([
  HeroSection(),
  FeaturesSection(),
  PriceCard(),
]).stagger(interval: 0.15) // Every item reveals 150ms after the previous
```

---

## 🚧 Common "Gotchas" & Solutions

| Issue | Standard Flutter Pain | Fluxy Solution |
| :--- | :--- | :--- |
| **FPS Drops** | Multi-layered `Opacity` widgets. | **Native Compositing**: Modifiers use GPU-accelerated layers. |
| **Animation Loop** | Manual `statusListener`. | `.loop()` and `.reverse()` modifiers for continuous motion. |
| **Transition Lag** | Heavy UI thread usage. | **Implicit Transitions**: Changes to properties auto-animate when chained. |
