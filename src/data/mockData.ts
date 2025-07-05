import { SpreadsheetRow, Tab, BottomTab } from "../types";

export const sampleData: SpreadsheetRow[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Alisha Patel",
    url: "www.alishapatel...",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: "6,200,000",
  },
  {
    id: 2,
    jobRequest: "Update press kit for Q3 earnings call",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Mark Johnson",
    url: "www.fast.marketing...",
    assigned: "Triya Pandey",
    priority: "High",
    dueDate: "30-10-2024",
    estValue: "3,500,000",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson...",
    assigned: "Rachel Lee",
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: "4,750,000",
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: "5,900,000",
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabro...",
    assigned: "Kevin Smith",
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: "2,800,000",
  },
];

export const mainTabs: Tab[] = [
  {
    id: "q3-financial",
    label: "Q3 Financial Overview",
    isActive: true,
    color: "blue",
  },
  {
    id: "abc",
    label: "ABC",
    isActive: false,
    color: "green",
  },
  {
    id: "answer-question",
    label: "Answer a question",
    isActive: false,
    color: "purple",
  },
  {
    id: "extract",
    label: "Extract",
    isActive: false,
    color: "orange",
  },
];

export const bottomTabs: BottomTab[] = [
  {
    id: "all-orders",
    label: "All Orders",
    isActive: true,
  },
  {
    id: "pending",
    label: "Pending",
    isActive: false,
  },
  {
    id: "reviewed",
    label: "Reviewed",
    isActive: false,
  },
  {
    id: "arrived",
    label: "Arrived",
    isActive: false,
  },
];
