'use client';
import React from 'react';

const DocumentationPage: React.FC = () => {
  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'api-reference', title: 'API Reference' },
    { id: 'tutorials', title: 'Tutorials' },
    { id: 'faq', title: 'FAQ' },
  ];

  const handleReturn = () => {
    window.location.href = '/';
  };

  return (
    <div style={styles.documentationPage}>
      <h1 className="text-center text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
        DOCUMENTATION
      </h1>

      {/* Navbar */}
      <nav style={styles.navbar}></nav>

      {/* Main content container */}
      <div style={styles.mainContent}>
        {/* Sidebar */}
        <aside style={styles.sidebar}>
          <ul style={styles.sidebarList}>
            {sections.map((section) => (
              <li key={section.id} style={styles.sidebarItem}>
                <a href={`#${section.id}`} style={{ textDecoration: 'none', color: '#f0f0f0' }}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <main style={styles.contentArea}>
          {sections.map((section) => (
            <section id={section.id} key={section.id} style={{ marginBottom: '2rem' }}>
              <h2 style={styles.heading}>{section.title}</h2>
  
  {section.id === 'introduction' && (
  <section
    id={section.id}
    key={section.id}
    style={{ marginBottom: '2rem', backgroundColor: '#2e2e2e', padding: '1.5rem', borderRadius: '8px' }}
  >
         <p>
              Welcome to the FlowForge Documentation! FlowForge is a powerful platform designed to help organizations and individuals automate their workflows and build sophisticated digital solutions using cutting-edge technologies. 
            </p>
            <p>
              As a service provider, FlowForge specializes in creating visually stunning, modern software products that leverage the latest frameworks, tools, and methodologies to solve real-world problems. At its core, FlowForge aims to streamline the process of automating repetitive tasks, integrating various services, and deploying scalable applications.
            </p>
            <p>
              Whether you are a developer looking to set up automation pipelines or a business aiming to enhance productivity, FlowForge provides a comprehensive set of tools and resources to meet your needs. The FlowForge platform is built by a team of passionate developers and designers who are dedicated to delivering high-quality solutions.
            </p>
            <p>
              Their commitment to innovation and client satisfaction ensures that every project is not only functional but also aesthetically pleasing, user-friendly, and adaptable to various business requirements.
            </p>
            <p>
              With a range of plans tailored to different levels of usage, FlowForge makes it easy to start small and scale up as your needs grow. You can explore features such as:
            </p>
            <ul>
              <li><strong>Visual Workflow Automation:</strong> Design workflows using a visual interface that simplifies complex automation processes.</li>
              <li><strong>API Integration:</strong> Connect your applications seamlessly with external services to expand your capabilities.</li>
              <li><strong>Real-time Collaboration:</strong> Empower teams to work together more effectively with collaborative tools that streamline development and deployment.</li>
              <li><strong>Customizable Templates:</strong> Speed up development by using pre-built templates that cover common use cases and workflows.</li>
              <li><strong>Monitoring and Analytics:</strong> Track the performance of your workflows and applications, and gain insights for optimization.</li>
            </ul>
            <p>
              The documentation is structured to guide you through all stages of using FlowForge, from getting started with basic setup and installation to advanced topics like API integration and best practices. Whether you are a beginner exploring the platform for the first time or an experienced developer looking for in-depth technical details, the documentation provides comprehensive resources to support your journey.
            </p>
            <p>
              Dive into our guides and tutorials to unlock the full potential of FlowForge and take the first step toward automating your workflows and transforming your ideas into reality.
            </p>

  </section>
)}

  {section.id === 'getting-started' && (
  <section
    id={section.id}
    key={section.id}
    style={{ marginBottom: '2rem', backgroundColor: '#2e2e2e', padding: '1.5rem', borderRadius: '8px' }}
  >
    <p>
      Welcome to the FlowForge Getting Started guide! This section is designed to help you quickly set up your environment, understand the core features of FlowForge, and begin creating your first automated workflows. Whether you’re a seasoned developer or just starting, this guide will walk you through the necessary steps to harness the power of FlowForge effectively.
    </p>

    <h3 style={styles.subHeading}>Step 1: Setting Up Your Account</h3>
    <p>To get started with FlowForge, the first step is to create an account. Follow these steps:</p>
    <ol style={{ marginLeft: '2rem' }}>
      <li>
        <strong>Visit the FlowForge Website:</strong> Navigate to the <a href="https://flowforge.com" style={styles.link}>FlowForge homepage</a> and click on the “Sign Up” button.
      </li>
      <li>
        <strong>Fill in the Registration Form:</strong> Enter your details, including your name, email address, and a secure password.
      </li>
      <li>
        <strong>Email Verification:</strong> After completing the registration form, check your email for a verification link. Click on the link to verify your account.
      </li>
      <li>
        <strong>Log In:</strong> Once your email is verified, return to the FlowForge website and log in using your credentials.
      </li>
    </ol>

    <h3 style={styles.subHeading}>Step 2: Exploring the Dashboard</h3>
    <p>
      After logging in, you'll be greeted by the FlowForge dashboard, your central hub for managing workflows and projects. Familiarize yourself with the following sections:
    </p>
    <ul style={{ marginLeft: '2rem' }}>
      <li><strong>Projects:</strong> Create and manage your projects. Each project can contain multiple workflows.</li>
      <li><strong>Workflows:</strong> This is where you will design and automate your processes. You can create new workflows, edit existing ones, and manage their settings.</li>
      <li><strong>API Documentation:</strong> Access comprehensive documentation that outlines how to integrate and use the FlowForge API.</li>
    </ul>

    <h3 style={styles.subHeading}>Step 3: Creating Your First Workflow</h3>
    <p>
      Creating a workflow is where the magic happens! Here’s how to get started:
    </p>
    <ol style={{ marginLeft: '2rem' }}>
      <li><strong>Navigate to the Workflows Section:</strong> From the dashboard, click on the “Workflows” tab.</li>
      <li><strong>Create a New Workflow:</strong> Click on the “Create New Workflow” button.</li>
      <li><strong>Choose a Template:</strong> FlowForge offers various templates for common tasks. Select a template that suits your needs or choose to start from scratch.</li>
      <li><strong>Drag and Drop Interface:</strong> Use the intuitive drag-and-drop interface to design your workflow. You can add different actions, triggers, and conditions to customize the workflow according to your requirements.</li>
      <li><strong>Configure Actions:</strong> Click on each action to configure its settings. For example, if you’re automating a task that sends emails, you’ll need to input the recipient addresses and message content.</li>
      <li><strong>Save Your Workflow:</strong> Once you’re satisfied with your design, click the “Save” button to store your workflow.</li>
    </ol>

    <h3 style={styles.subHeading}>Step 4: Testing Your Workflow</h3>
    <p>
      Before deploying your workflow, it’s crucial to test it to ensure it functions as expected:
    </p>
    <ol style={{ marginLeft: '2rem' }}>
      <li><strong>Run Tests:</strong> Use the built-in testing feature to simulate the workflow. FlowForge will execute the workflow step by step, allowing you to identify any issues.</li>
      <li><strong>Check Logs:</strong> After running the tests, check the logs for any errors or warnings. This information will help you troubleshoot and refine your workflow.</li>
      <li><strong>Make Adjustments:</strong> If you encounter any issues, return to the workflow designer to make necessary adjustments.</li>
    </ol>

    <h3 style={styles.subHeading}>Step 5: Deploying Your Workflow</h3>
    <p>
      Once your workflow has been tested and refined, you’re ready to deploy it:
    </p>
    <ol style={{ marginLeft: '2rem' }}>
      <li><strong>Activate the Workflow:</strong> Click the “Activate” button to make your workflow live. It will start processing based on the defined triggers.</li>
      <li><strong>Monitor Performance:</strong> Use the dashboard to monitor the performance of your workflows. FlowForge provides real-time analytics, enabling you to track execution times, error rates, and more.</li>
    </ol>

    <h3 style={styles.subHeading}>Step 6: Accessing Resources and Support</h3>
    <p>
      To further enhance your experience with FlowForge, take advantage of the following resources:
    </p>
    <ul style={{ marginLeft: '2rem' }}>
      <li><strong>Documentation:</strong> The comprehensive <a href="https://flowforge.com/docs" style={styles.link}>FlowForge documentation</a> covers everything from API integrations to advanced workflow configurations.</li>
      <li><strong>Community Forum:</strong> Join the FlowForge community to connect with other users, share your experiences, and seek advice.</li>
      <li><strong>Customer Support:</strong> If you encounter issues or have questions, reach out to FlowForge support via the support tab on your dashboard.</li>
    </ul>

    <h3 style={styles.subHeading}>Conclusion</h3>
    <p>
      Congratulations! You’ve successfully set up your FlowForge account, created your first workflow, and learned how to test and deploy it. With these foundational steps, you’re well on your way to automating your workflows and maximizing productivity. Explore the platform, experiment with different features, and take full advantage of what FlowForge has to offer. Happy automating!
    </p>

  </section>
)}
{section.id === 'api-reference' && (
  <section
    id={section.id}
    key={section.id}
    style={{ marginBottom: '2rem', backgroundColor: '#2e2e2e', padding: '1.5rem', borderRadius: '8px' }}
  >
    <p>
      The FlowForge API allows you to programmatically interact with the platform's core features, enabling seamless integration with your applications. This reference covers the key endpoints, request formats, and response structures to help you utilize the API effectively.
    </p>

    <h3 style={styles.subHeading}>Base URL</h3>
    <p>
      All API requests are made to the following base URL:
      <code style={styles.code}>https://api.flowforge.com/v1/</code>
    </p>

    <h3 style={styles.subHeading}>Authentication</h3>
    <p>
      To access the FlowForge API, you must authenticate using an API key. Include the API key in the header of your requests:
    </p>
    <pre style={styles.codeBlock}>
      {`Authorization: Bearer YOUR_API_KEY`}
    </pre>

    <h3 style={styles.subHeading}>Endpoints</h3>
    <p>Below are the main API endpoints available:</p>

    <h4 style={styles.subHeading}>1. Create a Workflow</h4>
    <p>
      Use this endpoint to create a new workflow. This is a <strong>POST</strong> request.
    </p>
    <strong>Endpoint:</strong>
    <pre style={styles.codeBlock}>
      {`POST /workflows`}
    </pre>
    <strong>Request Body:</strong>
    <pre style={styles.codeBlock}>
      {`{
  "name": "My Workflow",
  "description": "A sample workflow",
  "steps": [
    {
      "type": "action",
      "data": {
        // action data
      }
    }
  ]
}`}
    </pre>
    <strong>Response:</strong>
    <pre style={styles.codeBlock}>
      {`{
  "id": "workflow_id",
  "name": "My Workflow",
  "status": "active"
}`}
    </pre>

    <h4 style={styles.subHeading}>2. Get Workflows</h4>
    <p>
      Retrieve a list of all workflows associated with your account. This is a <strong>GET</strong> request.
    </p>
    <strong>Endpoint:</strong>
    <pre style={styles.codeBlock}>
      {`GET /workflows`}
    </pre>
    <strong>Response:</strong>
    <pre style={styles.codeBlock}>
      {`[
  {
    "id": "workflow_id",
    "name": "My Workflow",
    "status": "active"
  },
  // more workflows
]`}
    </pre>

    <h4 style={styles.subHeading}>3. Update a Workflow</h4>
    <p>
      Update an existing workflow by its ID. This is a <strong>PUT</strong> request.
    </p>
    <strong>Endpoint:</strong>
    <pre style={styles.codeBlock}>
      {`PUT /workflows/{id}`}
    </pre>
    <strong>Request Body:</strong>
    <pre style={styles.codeBlock}>
      {`{
  "name": "Updated Workflow",
  "description": "Updated description",
  "steps": []
}`}
    </pre>
    <strong>Response:</strong>
    <pre style={styles.codeBlock}>
      {`{
  "id": "workflow_id",
  "name": "Updated Workflow",
  "status": "active"
}`}
    </pre>

    <h4 style={styles.subHeading}>4. Delete a Workflow</h4>
    <p>
      Delete a workflow by its ID. This is a <strong>DELETE</strong> request.
    </p>
    <strong>Endpoint:</strong>
    <pre style={styles.codeBlock}>
      {`DELETE /workflows/{id}`}
    </pre>
    <strong>Response:</strong>
    <pre style={styles.codeBlock}>
      {`{
  "message": "Workflow deleted successfully"
}`}
    </pre>

    <h3 style={styles.subHeading}>Error Handling</h3>
    <p>
      The API uses standard HTTP status codes to indicate the success or failure of requests. Common error codes include:
    </p>
    <ul style={{ marginLeft: '2rem' }}>
      <li><strong>400 Bad Request:</strong> Invalid request format or missing required fields.</li>
      <li><strong>401 Unauthorized:</strong> Invalid or missing API key.</li>
      <li><strong>404 Not Found:</strong> The requested resource does not exist.</li>
      <li><strong>500 Internal Server Error:</strong> An error occurred on the server side.</li>
    </ul>

  </section>
)}

{section.id === 'tutorials' && (
  <section
    id={section.id}
    key={section.id}
    style={{ marginBottom: '2rem', backgroundColor: '#2e2e2e', padding: '1.5rem', borderRadius: '8px' }}
  >
    <h2 style={styles.heading}>Creating Your First Automated Workflow</h2>
    <p>
      In this tutorial, we will guide you through the steps to create your first automated workflow using FlowForge. This hands-on approach will help you understand the key features of FlowForge and how to leverage them to automate tasks efficiently.
    </p>

    <h3 style={styles.subHeading}>Prerequisites</h3>
    <p>
      Before you begin, ensure you have the following:
    </p>
    <ul style={{ marginLeft: '2rem' }}>
      <li>An active FlowForge account. If you don’t have one, please <a href="https://flowforge.com/signup" style={styles.link}>sign up here</a>.</li>
      <li>A basic understanding of workflows and automation concepts.</li>
    </ul>

    <h3 style={styles.subHeading}>Step 1: Log In to Your FlowForge Account</h3>
    <p>
      Begin by navigating to the FlowForge website and logging into your account. Once you are logged in, you will be taken to the dashboard.
    </p>
  

    <h3 style={styles.subHeading}>Step 2: Create a New Workflow</h3>
    <p>
      Click on the “Workflows” tab in the navigation menu and select “Create New Workflow.”
    </p>
  
    <p>
      Fill in the necessary details, including the workflow name and description. Choose whether to start from a template or create from scratch.
    </p>

    <h3 style={styles.subHeading}>Step 3: Design Your Workflow</h3>
    <p>
      Use the drag-and-drop interface to add actions, triggers, and conditions to your workflow. Here’s how to do it:
    </p>
    <ul style={{ marginLeft: '2rem' }}>
      <li><strong>Choose a Trigger:</strong> Select how your workflow will start. This could be an event like a form submission or a scheduled time.</li>
      <li><strong>Add Actions:</strong> Choose the actions your workflow should perform when triggered. You can add multiple actions in a sequence.</li>
      <li><strong>Set Conditions:</strong> Use conditional logic to control the flow based on certain criteria. This allows you to create more complex workflows.</li>
    </ul>
  

    <h3 style={styles.subHeading}>Step 4: Configure Action Settings</h3>
    <p>
      Each action can be customized to meet your specific needs. Click on an action to access its settings and fill in the required fields. For example, if your action sends an email, specify the recipient, subject, and message body.
    </p>

    <h3 style={styles.subHeading}>Step 5: Test Your Workflow</h3>
    <p>
      Before activating your workflow, it's crucial to test it:
    </p>
    <ul style={{ marginLeft: '2rem' }}>
      <li>Use the “Test” feature to simulate the workflow execution.</li>
      <li>Check the logs for any errors or issues during the test run.</li>
      <li>Make necessary adjustments based on the test results.</li>
    </ul>
   

    <h3 style={styles.subHeading}>Step 6: Activate Your Workflow</h3>
    <p>
      Once you are satisfied with the testing results, click on the “Activate” button to make your workflow live. It will now respond to the triggers you defined.
    </p>
 

    <h3 style={styles.subHeading}>Step 7: Monitor and Optimize</h3>
    <p>
      After activation, monitor your workflow’s performance through the dashboard:
    </p>
    <ul style={{ marginLeft: '2rem' }}>
      <li>Check execution logs to track the workflow's activity.</li>
      <li>Analyze performance metrics to identify bottlenecks or areas for improvement.</li>
    </ul>

    <h3 style={styles.subHeading}>Conclusion</h3>
    <p>
      Congratulations! You have successfully created and activated your first automated workflow using FlowForge. Continue to explore the platform to discover more features and possibilities for automation.
    </p>
  </section>
)}

  {section.id === 'faq' && (
  <section
    id={section.id}
    key={section.id}
    style={{ marginBottom: '2rem', backgroundColor: '#2e2e2e', padding: '1.5rem', borderRadius: '8px' }}
  >
       <h2 style={styles.heading}><span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Frequently Asked Questions (FAQ)</span></h2>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>1. What is FlowForge?</h3>
              <p>FlowForge is a platform designed to automate workflows and build digital solutions using modern technologies. It allows users to create visually stunning applications and streamline their processes.</p>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>2. How can I get started with FlowForge?</h3>
              <p>To get started, sign up on our website and explore the documentation for installation instructions and initial setup guides.</p>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>3. What are the main features of FlowForge?</h3>
              <p>FlowForge offers features like visual workflow automation, API integration, real-time collaboration, customizable templates, and monitoring and analytics.</p>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>4. Is there a free trial available?</h3>
              <p>Yes, we offer a free trial that allows you to explore our features before committing to a subscription plan. Please check our pricing page for more details.</p>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>5. How do I integrate FlowForge with other services?</h3>
              <p>FlowForge provides comprehensive API documentation that outlines how to connect your applications with various external services. You can find more information in the API Reference section of our documentation.</p>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>6. What support options are available?</h3>
              <p>We offer a variety of support options, including a knowledge base, email support, and community forums. Feel free to reach out if you need assistance!</p>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>7. Can FlowForge be used for large-scale applications?</h3>
              <p>Absolutely! FlowForge is designed to handle projects of all sizes, making it suitable for both small startups and large enterprises.</p>
            </div>

            <div style={styles.faqItem}>
              <h3 style={styles.question}>8. How do I report a bug or suggest a feature?</h3>
              <p>You can report bugs or suggest features through our support channel or community forums. We value user feedback and continuously strive to improve our platform.</p>
            </div>

  </section>
)}
            </section>
          ))}
                 {/* Return Button */}
      <button
        onClick={handleReturn}
        style={styles.returnButton}
      >
        Return to Homepage
      </button>
        </main>
      </div>
    </div>
  );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
  documentationPage: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#1e1e1e',
    color: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    backgroundColor: '#333',
    padding: '1rem',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    color: '#000033',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#2e2e2e',
    padding: '1rem',
    height: '100vh',
    position: 'fixed',
    overflowY: 'auto',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sidebarItem: {
    marginBottom: '0.5rem',
    cursor: 'pointer',
  },
  contentArea: {
    marginLeft: '250px',
    padding: '2rem',
    flex: 1,
  },
  heading: {
    color: 'white',
     fontWeight: 'bold',
     textDecoration: 'underline',
  },
   faqItem: {
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: '#3e3e3e',
    borderRadius: '5px',
  },
  question: {
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: '0.5rem',
  },
};

export default DocumentationPage;