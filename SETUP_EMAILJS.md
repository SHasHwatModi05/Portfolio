# 📧 EmailJS Setup Guide

## What is EmailJS?
EmailJS lets you send emails directly from JavaScript — no backend required. It's 100% free for up to 200 emails/month.

---

## Step-by-Step Setup (10 minutes)

### Step 1: Create an EmailJS account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account

---

### Step 2: Add a Gmail Email Service
1. In your EmailJS dashboard, click **Email Services** in the sidebar
2. Click **Add New Service**
3. Select **Gmail**
4. Click **Connect Account** and sign in with `modiiofficialwork@gmail.com`
5. Give it a name (e.g., `Portfolio Contact`)
6. Click **Create Service**
7. **Copy the Service ID** (looks like: `service_abc123`)

---

### Step 3: Create an Email Template
1. Click **Email Templates** in the sidebar
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Portfolio Message from {{from_name}}
```

**Body:**
```
You received a new message from your portfolio contact form.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Set **To Email** to `modiiofficialwork@gmail.com`  
5. Set **Reply To** to `{{reply_to}}`
6. Click **Save**
7. **Copy the Template ID** (looks like: `template_xyz789`)

> ⚠️ The variable names in the template MUST match exactly:
> `from_name`, `from_email`, `message`, `reply_to`

---

### Step 4: Get your Public Key
1. Click your account name (top right) → **Account**
2. Under **API Keys**, copy your **Public Key** (looks like: `AbCdEfGhIjKlMnOp`)

---

### Step 5: Update your `.env` file
Open `.env` in the project root and replace the placeholders:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOp
```

> 🔒 Never commit your `.env` file to GitHub! It's already in `.gitignore`.

---

### Step 6: Restart the dev server
```bash
npm run dev
```

---

## Testing
1. Fill out the contact form on your portfolio
2. Click **Send Message**
3. Check your Gmail inbox — you should receive the message within seconds!

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "EmailJS is not configured yet" | Check your `.env` values are correct (no extra spaces) |
| "Failed to send message" | Verify your Service ID and Template ID in EmailJS dashboard |
| Not receiving emails | Check Gmail spam folder; make sure Gmail service is connected |
| 403 error | Your Public Key may be incorrect |

---

## Security Notes
- Your Public Key is safe to expose (it is read-only)
- EmailJS validates domains in production
- The `.env` file keeps sensitive config out of source control
- Basic spam protection is handled by EmailJS rate limiting
