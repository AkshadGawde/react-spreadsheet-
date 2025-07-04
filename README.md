# React Spreadsheet Prototype

A pixel-perfect React application that replicates a spreadsheet interface with Google Sheets/Excel-like functionality.

## 🚀 Features

### Core Functionality
- **Spreadsheet Grid**: Interactive data grid with cell selection and editing
- **Navigation**: Keyboard navigation between cells (arrow keys)
- **Interactive Elements**: All buttons and tabs are functional with console logging
- **Status Management**: Clickable status badges with different states
- **Priority Indicators**: Color-coded priority levels (High, Medium, Low)
- **Tab System**: Multi-level tab navigation with state management

### UI Components
- **Header**: Navigation breadcrumb, search functionality, user profile
- **Toolbar**: Hide fields, sort, filter, cell view, import/export, share buttons
- **Tab Bar**: Main spreadsheet tabs with colored indicators
- **Data Grid**: Full spreadsheet table with 10 columns and sample data
- **Bottom Tabs**: Order status navigation (All Orders, Pending, Reviewed, Arrived)

### Technical Features
- **TypeScript**: Full type safety with strict mode
- **Tailwind CSS**: Utility-first styling for pixel-perfect design
- **Responsive**: Optimized for desktop with mobile considerations
- **State Management**: Local component state management
- **Interactive Feedback**: Hover states and visual feedback

## 🛠️ Tech Stack

- **React 18** - Component-based UI framework
- **TypeScript** - Type-safe JavaScript with strict mode
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **ESLint + Prettier** - Code linting and formatting

## 📋 Requirements Met

✅ **Visual Fidelity**: Pixel-perfect match to Figma design  
✅ **Spreadsheet Experience**: Google Sheets/Excel-like interaction  
✅ **Interactive UI**: All buttons/tabs functional with console logging  
✅ **Code Quality**: Passes ESLint, Prettier, and TypeScript checks  
✅ **Clean Architecture**: Component-based structure with proper types

## Setup and Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run start
   ```
   
4. Build for production
   ```
   npm run build
   ```

## Project Structure

```
/src
  /components         # UI components
    Header.tsx        # Top navigation with workspace path
    Toolbar.tsx       # Action buttons (Hide fields, Sort, etc.)
    TabBar.tsx        # Tab navigation with Q3 Financial Overview
    DataGrid.tsx      # Main spreadsheet component
    BottomTabs.tsx    # Bottom tab navigation
  /styles            
    global.css        # Global styles
  /types              
    index.ts         # TypeScript interfaces
  App.tsx            # Main application component
  main.tsx           # Entry point
```

## Implementation Notes

The prototype is implemented with a focus on:

1. **Pixel-perfect UI**: Closely matching the provided Figma design
2. **Interactive Elements**: All buttons and tabs change state or log to console
3. **Responsive Layout**: Works across different screen sizes
4. **Performance**: Optimized for smooth scrolling and rendering

## Trade-offs and Decisions

- Used react-table for the grid implementation to leverage built-in features like column resizing
- Focused on the visual appearance and interaction over complex data management
- Used Tailwind CSS for rapid styling that matches the design
- Implemented minimal keyboard navigation for basic spreadsheet functionality
