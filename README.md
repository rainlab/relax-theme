Relax Theme
==========

![Screenshot](https://raw.githubusercontent.com/rainlab/relax-theme/master/assets/images/theme-preview.png)

A sample client website that contains preconfigured pages for static pages, a blog and client area.

<!-- !![560x315](https://player.vimeo.com/video/132426322) -->
* [View the screencast presentation](https://vimeo.com/132426322)

> **Note**: The contact form requires some system configuration to work properly, see the documentation for details.

## Documentation

The contact page requires a mail template to be created. You can create a new mail template by selecting *Settings > Mail templates > New template*.

1. Select the layout **Default**
1. Enter the code: `contact::form`
1. Enter the subject: **Contact form submitted**
1. Enter the description: **Sent when a user submits the contact form.**
1. Enter the HTML below:

        <p>From: {{name}} {{surname}} &lt;{{email}}&gt;</p>
        <p>Phone: {{ phone }}</p>
        <p>Company: {{company}}</p>
        <p>Message Body:</p>
        <p>{{comments}}</p>
        <p>--</p>
        <p>This mail is sent via contact form found on House of Chairs!</p>

1. Click **Create**

Submitting the contact form will send an email to all administrators who belong to the group with code `support-contact`. You can create this group by selecting *Settings > Administrators > Manage Groups > New Group*.

1. Place a tick in **Add new administrators to this group by default.** to add all the existing admins to this new group.
1. Enter a name: **Support contact**
1. Enter the code: `support-contact`
1. Click **Create**