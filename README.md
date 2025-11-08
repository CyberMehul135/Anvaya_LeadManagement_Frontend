# Anvaya ( Lead Management App )

A full-stack lead management application that helps companies efficiently track, assign, and manage sales leads.<br>
Agents can create, update, and monitor lead progress with real-time status tracking and filtering.<br>
Built with a React frontend, Express/Node backend, MongoDB database, and RESTful APIs for seamless data flow.

---

## Demo Link

[Live Demo](https://anvaya-lead-management-frontend.vercel.app/)

## Quick Start

```
git clone https://github.com/CyberMehul135/Anvaya_LeadManagement_Frontend.git
cd <your-repo>
npm install
npm run dev
```

## Technologies

#### Frontend :

- React JS
- Tailwind CSS
- Chart.js + React Chart.js 2
- Context API (State Management)
- Axios
- React Router

#### Backend :

- Node.js
- Express
- Mongoose
- RESTful APIs

#### Database :

- MongoDB

## Demo Video

Watch a walkthrough (5-6 minutes) of all major features of this app :
[Video Link](https://drive.google.com/file/d/1-z16Db2tOABL1rfIAOeXtZB_3R-Hk6P-/view)

## Features

**Dashboard**

- Display leads stats
- Display a list of leads
- Filter leads by their status

**Leads Listing**

- Display a list of leads
- Provides filters (by status, agent)
- Supports sorting (by priority, time to close, new to old, old to new)
- “Add New Lead” button opens a form to create a lead

**Lead Details**

- View complete lead information (company name, email, phone, etc.)
- “Edit Lead” button opens a form to update lead details
- Add and view comments related to the lead

**Sales Agent Listing**

- Displays a list of sales agents
- “Add New Agent” button opens a form to add a new agent

**Reports (Charts)**

- Pipeline Overview: Leads in pipeline and leads closed last week (Pie Chart)
- Lead Status Distribution: Breakdown of leads by status (Pie Chart)
- Agent Performance: Performance comparison by agent (Bar Chart)

**Settings**

- Displays a list of leads with delete option
- Displays a list of agents with delete option

## API Reference

### **GET /api/leads**<br>

List all leads<br>
Sample Response:<br>
`[{_id, name, email, phone, ...}, ...]`

### **GET /api/leads/:leadId**<br>

Get details for one lead<br>
Sample Response:<br>
`{_id, name, email, phone, ...}`

### **GET /api/agents**<br>

List all agents<br>
Sample Response:<br>
`[{_id, name, email, ...}, ...]`

### **GET /api/leads/:id/comments**<br>

List of comments by lead<br>
Sample Response:<br>
`[{_id, lead, author, commentText, ...}, ...]`

### **GET /api/report/last-week**<br>

List of leads closed last-week<br>
Sample Response:<br>
`[{_id, name, salesAgent, closedAt}, ...]`

### **GET /api/report/pipeline**<br>

List of leads in pipeline<br>
Sample Response:<br>
`{totalLeadsInPipeline}`

### **GET /api/report/status-count**<br>

List of status count<br>
Sample Response:<br>
`[{_id, count}, {_id, count}, ...]`

### **GET /api/report/agent-count**<br>

List of agent leads-count<br>
Sample Response:<br>
`[{agentId, agentName, closedLeadCount, pipelineLeadCount}, ...]`

### **POST /api/leads**<br>

Create a new lead <br>
Sample Response:<br>
`{_id, name, email, phone, ...}`

### **POST /api/agents/:agentId**<br>

Create a new agent <br>
Sample Response:<br>
`{_id, name, email}`

### **POST /api/leads/:id/comments**<br>

Create a new comment <br>
Sample Response:<br>
`{_id, lead, author, commentText, createdAt}`

### **UPDATE /api/leads/:leadId**<br>

Update a lead <br>
Sample Response:<br>
`{_id, name, email, phone, ...}`

### **DELETE /api/leads/:leadId**<br>

Delete a lead <br>
Sample Response:<br>
`{_id, name, email, phone, ...}`

### **DELETE /api/agents/:agentId**<br>

Delete a agent <br>
Sample Response:<br>
`{_id, name, email}`

## Contact

For bugs or feature requests, please reach out to mehulrathod9254@gmail.com
