# 📘 Front-End Assignment

This project implements two reusable React components using React + TypeScript + TailwindCSS (v3) + Storybook.
It goes beyond the basic requirements by also implementing optional features like clearable inputs and password visibility toggles.

# 🎯 Components
1. InputField

Label, placeholder, helper text, error message

States: disabled, invalid

Variants: outlined, filled, ghost

Sizes: sm, md, lg

Optional Features implemented:

✅ Clear button (✕ inside input)

✅ Password toggle (Show/Hide password)

✅ Works with both clearable + password together

2. DataTable

Displays tabular data

Column sorting (ascending/descending)

Row selection (single/multiple with checkboxes)

Loading state

Empty state

Enhanced UI:

Zebra striping

Hover highlight

Rounded corners + shadow for polished look

# 🛠️ Tech Stack

React (CRA with TypeScript template)

TailwindCSS v3

Storybook

clsx (for conditional classNames)

# 📂 Project Structure
src/
 ├─ components/
 │   ├─ InputField.tsx
 │   ├─ DataTable.tsx
 ├─ stories/
 │   ├─ InputField.stories.tsx
 │   ├─ DataTable.stories.tsx
 ├─ App.tsx   (demo usage with live add user form)
 ├─ index.css
 └─ index.tsx

# ⚡ Getting Started
1️⃣ Clone repo & install dependencies
git clone <your-repo-link>
cd my-assignment
npm install

2️⃣ Run React app
npm start


Runs at 👉 http://localhost:3000

3️⃣ Run Storybook
npm run storybook


Runs at 👉 http://localhost:6006

# 📘 Storybook Features

Storybook demonstrates all states & variants of the components interactively:

🔹 InputField

Default

Invalid with error message

Disabled state

Variants: Outlined, Filled, Ghost

Sizes: Small, Medium, Large

Extras:

Clearable Input (✕ button)

Password Toggle (Show/Hide)

Password + Clear combined

🔹 DataTable

Default table with sorting + row selection

Loading state

Empty state

Clean, responsive styling with hover + zebra rows

👉 All props are editable live in Storybook Controls, so you can test them without modifying code.

# 🎥 Demo

![InputField Demo](docs/screenshot1.png)

![DataField-stories Demo](docs/screenshot2.png)

![InputField-stories Demo](docs/screenshot3.png)

![InputField-stories Demo](docs/screenshot4.png)

[▶ Watch Demo Video 1](docs/recording1.mp4)

[▶ Watch Demo Video 2](docs/recording2.mp4)



# 📦 Deployment

Storybook can be deployed using Chromatic
 or Vercel
.

CRA app can be deployed to Vercel or Netlify easily.

# 📄 License

This project is for internship assignment purpose.