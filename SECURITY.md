# Website Security Guide - Vega Sky

This document explains the basic security setup for the Vega Sky website.

## HTTPS / SSL

Your live site should always use HTTPS. If the browser shows a "Not secure" warning, the SSL certificate is missing or misconfigured in hosting or DNS.

### Steps to fix

1. Log in to your domain or hosting provider.
2. Enable SSL/TLS. Most hosts offer free Let's Encrypt certificates.
3. Force all `http://` traffic to redirect to `https://`.
4. Wait for DNS propagation, then verify with an SSL checker.

## Contact Details

The Contact Us section does not use a database. It displays the business contact details directly:

- Email: sales@vegasky.ae
- Phone: +971 54 224 2528
- Working hours: Mon - Sat, 8 AM - 6 PM

Because there is no contact database, there are no customer submissions stored by this website.

## Deployment Security Headers

The `public/_headers` file adds common security headers for Netlify. For Vercel, equivalent headers are in `vercel.json`.

## Ongoing Maintenance

- Enable SSL on vegasky.ae.
- Keep contact details up to date.
- Test phone and email links after deployment.
- Run an SSL test after DNS or hosting changes.
