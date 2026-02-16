# 🧪 Smart Forms & Inputs

**Reactive. Validated. Clean.**

Fluxy's Form system eliminates the "state-spaghetti" typically associated with Flutter inputs. By unifying `Signal`-based reactivity with high-level `Validator` chains, we've created a form engine that feels like writing clean logic rather than UI boilerplate.

---

## 💎 The Reactive Flow

In Fluxy, an input isn't just a widget; it's a window into a `Signal<String>`. Every keystroke updates the state, and every validation is performed in real-time.

### ✍️ Fx.input
The workhorse of data entry. Fully theme-aware and responsive.

```dart
final email = flux(""); // Normal flux signal

Fx.input(
  signal: email,
  placeholder: "Enter email",
  icon: Icons.email_outlined,
  validators: [
    Validators.required("Email is needed"),
    Validators.email("Invalid format"),
  ],
)
```

### 🛡️ Fx.form
The container that brings order to chaos. It handles keyboard dismissal, auto-validation, and grouped submission.

```dart
Fx.form(
  onSubmit: () => saveRecord(),
  child: Fx.col(gap: 16).children([
    Fx.input(signal: name, label: "Full Name"),
    Fx.password(signal: pass, label: "Password"),
    "Submit".primaryBtn().onTap(() => submit()),
  ]),
)
```

---

## ⚡ Comparison: Standard vs. Fluxy

#### ❌ Standard Flutter (State Management hell)
```dart
final _controller = TextEditingController();
final _key = GlobalKey<FormState>();

Form(
  key: _key,
  child: TextFormField(
    controller: _controller,
    decoration: InputDecoration(labelText: 'Name'),
    validator: (value) {
      if (value == null || value.isEmpty) return 'Required';
      return null;
    },
  ),
)
// Manual state updates, manual disposal, manual validation
```

#### ✅ Fluxy DSL (Atomic)
```dart
final name = fluxField("").required(); // Logic defined in the signal

Fx.input(signal: name, label: "Name") // UI bound to logic
```

---

## 🛠️ Intelligent Validators

Fluxy provides a library of chainable validators that work outside the UI tree. This means your business logic stays in your controller, not your view code.

```dart
final age = fluxField("")
  .required()
  .numeric()
  .min(18, "Must be adult");
```

---

## 🚧 Common "Gotchas" & Solutions

| Issue | Standard Flutter Pain | Fluxy Solution |
| :--- | :--- | :--- |
| **Keyboard Overflows** | `SingleChildScrollView` + manual focus. | `Fx.form` handles auto-scrolling to active fields. |
| **State Sync** | `controller.addListener` or `onChanged`. | Built-in two-way binding with `Signal<String>`. |
| **Password Toggling** | Manual boolean for `obscureText`. | `Fx.password()` includes built-in toggle logic. |
| **Disposal Leaks** | Forgetting to `dispose()` controllers. | Fluxy signals are self-cleaning and auto-disposed. |
