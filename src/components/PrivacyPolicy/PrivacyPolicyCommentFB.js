import React from "react";

export default function PrivacyPolicyCommentFB() {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Auto Comments Facebook Groups</strong>
      </p>
      <p>Effective date: 2025</p>

      <h2>1. Introduction</h2>
      <p>
        Auto Comments Facebook Groups respects your privacy. This Privacy Policy
        explains how the extension handles user data.
      </p>

      <h2>2. Data Collection</h2>
      <ul>
        <li>No personal data is collected</li>
        <li>No Facebook credentials are accessed</li>
        <li>No browsing data is tracked</li>
        <li>No data is sent to external servers</li>
      </ul>

      <h2>3. How the Extension Works</h2>
      <p>
        All actions are performed locally in your browser. Any data you enter is
        stored only in Chrome local storage.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>The extension does not use analytics, ads, or third-party trackers.</p>

      <h2>5. Permissions</h2>
      <ul>
        <li>storage – save local settings</li>
        <li>activeTab – interact with current tab</li>
        <li>scripting – automate actions</li>
      </ul>

      <h2>6. User Responsibility</h2>
      <p>
        Users must comply with Facebook policies and use the extension
        responsibly.
      </p>

      <h2>7. Contact</h2>
      <p>Email: support@example.com</p>

      <p style={{ marginTop: 40, fontSize: 14, opacity: 0.6 }}>
        © 2025 Auto Comments Facebook Groups
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
};
