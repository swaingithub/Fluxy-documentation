# 🧠 Section 5: The Reactive Engine (Signals & Effects)

**Zero-Boilerplate State. Atomic Rebuilds.**

Fluxy's Heart is the **Reactive Engine**. Unlike `Provider` or `Bloc` which often trigger unnecessary full-screen rebuilds, Fluxy uses **Signals** to target specific properties of a single widget, resulting in unmatched performance.

---

## ⚡ The Signal (`flux<T>`)

A Signal is a reactive wrapper around any value. When the value changes, only the widgets observing that specific signal are updated.

### ⚡ Side-by-Side Comparison

| Standard Flutter (State Management) | Fluxy Reactive Engine |
| :--- | :--- |
| ```dart
class MyState extends ChangeNotifier {
  int _count = 0;
  int get count => _count;
  void increment() {
    _count++;
    notifyListeners(); // Rebuilds entire widget tree!
  }
}
``` | ```dart
final count = flux(0); // Defined once

// Rebuilds ONLY this text
Fx(() => Fx.text("Count: ${count.value}"))

// Update value anywhere
count.value++;
``` |

---

## ⚡ Form Signals (`fluxField`)

Specialized signals for inputs that handle validation and "touched" states automatically.

### ⚡ Side-by-Side Comparison

| Standard Flutter | Fluxy DSL |
| :--- | :--- |
| ```dart
String? error;
String val = "";
void validate(String s) {
  if (s.isEmpty) error = "Required";
  setState(() {});
}
``` | ```dart
final name = fluxField("")
  .required("Min name")
  .minLength(3);

// Error and state are managed internally
``` |

---

## ⚡ Computed Signals (`computedFlux`)

Derived state that automatically updates when its dependencies change.

```dart
final price = flux(100);
final tax = flux(0.18);

// Automatically updates when price or tax changes
final total = flux(() => price.value * (1 + tax.value));
```

---

## 🚧 Common "Gotchas" & Solutions

| Issue | Standard Flutter Pain | Fluxy Solution |
| :--- | :--- | :--- |
| **Rebuild Over-triggering** | Consumer/Selector complexity. | **Atomic Rebuilds**: Only the specific `Fx` builder closure rebuilds. |
| **State Disposal** | Manual `controller.dispose()`. | **Auto-GC**: Signals are garbage collected when no longer observed. |
| **Initialization Race** | `initState` async gaps. | `AsyncSignal`: Built-in `.on(loading: ..., data: ...)` pattern. |
