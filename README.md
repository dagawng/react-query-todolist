# Todo List App

A modern, responsive todo list application built with React 19, featuring a clean UI with dark/light mode support, real-time updates, and toast notifications.

## 🚀 Features

- ✅ **Add Tasks** - Create new todo items with a sleek input form
- ✏️ **Edit Tasks** - Update existing tasks through modal dialogs
- 🗑️ **Delete Tasks** - Remove tasks with confirmation dialogs
- ✅ **Mark Complete** - Toggle task completion status
- 🌙 **Dark/Light Mode** - Automatic theme switching
- 📱 **Responsive Design** - Works perfectly on all device sizes
- 🔔 **Toast Notifications** - Success/error feedback for all actions
- ⚡ **Real-time Updates** - Instant UI updates with React Query
- 🎨 **Modern UI** - Beautiful design with Chakra UI components

## 🛠️ Tech Stack

- **Frontend Framework:** React 19 with Hooks
- **Build Tool:** Vite
- **UI Library:** Chakra UI v3
- **State Management:** TanStack React Query
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Backend:** JSON Server (for development)
- **Styling:** Emotion (via Chakra UI)
- **Type Checking:** TypeScript (dev dependency)

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd todolist
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the JSON Server backend:**

   ```bash
   npx json-server --watch db.json --port 4000
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5174`

## 🏃‍♂️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   ├── toaster.jsx
│   │   ├── provider.jsx
│   │   └── ...
│   ├── Form.jsx      # Task creation form
│   ├── Items.jsx     # Task list container
│   ├── SingleItem.jsx # Individual task component
│   ├── UpdateButton.jsx # Task update modal
│   └── DeleteButton.jsx # Task deletion modal
├── customQuery.js   # React Query hooks and API calls
├── ContextApi.jsx   # React Context (if used)
├── axiosInstance.js # Axios configuration
├── App.jsx          # Main app component
├── main.jsx         # App entry point
└── index.css        # Global styles
```

## 🔧 Configuration

### Environment Setup

The app uses JSON Server for the backend API. The server runs on port 4000 by default.

### Theme Configuration

The app supports automatic dark/light mode switching through Chakra UI's theme provider.

### Toast Configuration

Toast notifications are configured in `src/components/ui/toaster.jsx` with:

- Placement: bottom-right
- Duration: 1 second (customizable)
- Pause on page idle: enabled

## 🎯 Usage

### Adding Tasks

1. Type your task in the input field at the top
2. Press Enter or click the plus icon
3. Task appears in the list with a success toast

### Editing Tasks

1. Click the edit icon (pencil) next to any task
2. Modify the task text in the modal
3. Click "Update" to save changes

### Deleting Tasks

1. Click the delete icon (trash) next to any task
2. Confirm deletion in the modal
3. Task is removed with a success toast

### Marking Complete

1. Click the checkbox next to any task
2. Task text gets crossed out when completed
3. Uncheck to mark as incomplete

## 🔌 API Endpoints

The app communicates with a JSON Server backend:

- `GET /tasks` - Fetch all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task
- `PATCH /tasks/:id` - Update task completion status
- `DELETE /tasks/:id` - Delete a task

## 🎨 Customization

### Themes

Modify themes in `src/components/ui/provider.jsx` or through Chakra UI's theme configuration.

### Styling

Customize component styles using Chakra UI's style props or Emotion CSS-in-JS.

### Toast Messages

Update toast messages and configurations in `src/customQuery.js`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [TanStack React Query](https://tanstack.com/query) for powerful data fetching
- [JSON Server](https://github.com/typicode/json-server) for the mock backend
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
