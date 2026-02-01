# 📧 EmailJS Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from the ModernBiz contact form.
```

4. **Copy your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `abcXYZ123456789`)

### Step 5: Configure Your Project

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:

   ```
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcXYZ123456789
   ```

3. Restart your dev server:
   ```bash
   npm run dev
   ```

### Step 6: Test It!

1. Go to your contact form
2. Fill in the details
3. Click "Send Message"
4. Check your email inbox!

## Important Notes

⚠️ **Security**:

- Never commit `.env` to Git (it's already in `.gitignore`)
- The public key is safe to use in frontend code
- For production, add environment variables in Vercel/Netlify dashboard

✅ **Free Tier Limits**:

- 200 emails/month
- Perfect for portfolio projects
- Upgrade if you need more

## Troubleshooting

**Email not sending?**

- Check browser console for errors
- Verify all three credentials are correct
- Make sure template variable names match (from_name, from_email, subject, message)
- Check EmailJS dashboard for error logs

**Still not working?**

- Try using a different email service (Gmail works best)
- Make sure your email service is connected properly
- Check spam folder

## Alternative: Use Fallback Mode

If you don't want to set up EmailJS right now, the form will still work but won't send real emails. To enable real email sending, just follow the steps above!
