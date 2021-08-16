//TABLE REFERENCE
var schoolDatabaseReference = db.ref("blockLevelAdmins");
var new_html = "";
window.onload = function () {
  initApp();
  displayadminData();
};
//BUTTONS OR ACTIONS
function initApp() {
  document
    .getElementById("add_admin")
    .addEventListener("click", addNewadmin, false);
}

// INSERT DATA
function addNewadmin() {
  var adminName = document.getElementById("admin-name").value;
  var schoolId = document.getElementById("school-id").value;
  var schoolName = document.getElementById("school-name").value;
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  var timeStamp = new Date().getTime();
  var tchID = "admin_" + timeStamp;
  schoolDatabaseReference.child(tchID).set({
    adminName: adminName,
    schoolId: schoolId,
    schoolName: schoolName,
    email: email,
    tch_id: tchID,
  });

  auth.createUserWithEmailAndPassword(email, password).then((cred) => {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "teamadrenaline6@gmail.com",
      Password: "team@adrenaline",
      To: email,
      From: "teamadrenaline6@gmail.com",
      Subject: "You have been registered on the SSMP",
      Body: `
      
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  xmlns:v="urn:schemas-microsoft-com:vml"
>
  <head>
    <!--[if gte mso 9
      ]><xml
        ><o:OfficeDocumentSettings
          ><o:AllowPNG /><o:PixelsPerInch
            >96</o:PixelsPerInch
          ></o:OfficeDocumentSettings
        ></xml
      ><!
    [endif]-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
    <meta content="width=device-width" name="viewport" />
    <!--[if !mso]><!-->
    <meta content="IE=edge" http-equiv="X-UA-Compatible" />
    <!--<![endif]-->
    <title></title>
    <!--[if !mso]><!-->
    <link
      href="https://fonts.googleapis.com/css?family=Bitter"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans"
      rel="stylesheet"
      type="text/css"
    />
    <!--<![endif]-->
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
      }

      table,
      td,
      tr {
        vertical-align: top;
        border-collapse: collapse;
      }

      * {
        line-height: inherit;
      }

      a[x-apple-data-detectors="true"] {
        color: inherit !important;
        text-decoration: none !important;
      }
    </style>
    <style id="media-query" type="text/css">
      @media (max-width: 625px) {
        .block-grid,
        .col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }

        .block-grid {
          width: 100% !important;
        }

        .col {
          width: 100% !important;
        }

        .col > div {
          margin: 0 auto;
        }

        img.fullwidth,
        img.fullwidthOnMobile {
          max-width: 100% !important;
        }

        .no-stack .col {
          min-width: 0 !important;
          display: table-cell !important;
        }

        .no-stack.two-up .col {
          width: 50% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num8 {
          width: 66% !important;
        }

        .no-stack .col.num4 {
          width: 33% !important;
        }

        .no-stack .col.num3 {
          width: 25% !important;
        }

        .no-stack .col.num6 {
          width: 50% !important;
        }

        .no-stack .col.num9 {
          width: 75% !important;
        }

        .video-block {
          max-width: none !important;
        }

        .mobile_hide {
          min-height: 0px;
          max-height: 0px;
          max-width: 0px;
          display: none;
          overflow: hidden;
          font-size: 0px;
        }

        .desktop_hide {
          display: block !important;
          max-height: none !important;
        }
      }
    </style>
  </head>

  <body
    class="clean-body"
    style="
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      background-color: #ffffff;
    "
  >
    <!--[if IE]><div class="ie-browser"><![endif]-->
    <table
      bgcolor="#FFFFFF"
      cellpadding="0"
      cellspacing="0"
      class="nl-container"
      role="presentation"
      style="
        table-layout: fixed;
        vertical-align: top;
        min-width: 320px;
        margin: 0 auto;
        border-spacing: 0;
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
        background-color: #ffffff;
        width: 100%;
      "
      valign="top"
      width="100%"
    >
      <tbody>
        <tr style="vertical-align: top;" valign="top">
          <td style="word-break: break-word; vertical-align: top;" valign="top">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
            <div style="background-color: #49a6e8;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 605px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#49a6e8;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:transparent;width:605px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 605px;
                      display: table-cell;
                      vertical-align: top;
                      width: 605px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 20px;
                                  padding-right: 20px;
                                  padding-bottom: 20px;
                                  padding-left: 20px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          align="center"
                          class="img-container center fixedwidth"
                          style="padding-right: 0px; padding-left: 0px;"
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><!
                          [endif]--><a
                            href="http://example.com"
                            style="outline: none;"
                            tabindex="-1"
                            target="_blank"
                          >
                            <img
                              align="center"
                              alt="Image"
                              border="0"
                              class="center fixedwidth"
                              src="https://pbs.twimg.com/media/EeG-7oxUwAEdnQH?format=png&name=medium"
                              style="
                                text-decoration: none;
                                -ms-interpolation-mode: bicubic;
                                height: auto;
                                border: 0;
                                width: 100%;
                                max-width: 211px;
                                display: block;
                              "
                              title="Image"
                              width="211"
                          /></a>
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 20px; padding-bottom: 30px; font-family: Georgia, 'Times New Roman', serif"><![endif]-->
                        <div
                          style="
                            color: #ffffff;
                            font-family: 'Bitter', Georgia, Times,
                              'Times New Roman', serif;
                            line-height: 1.2;
                            padding-top: 20px;
                            padding-right: 10px;
                            padding-bottom: 30px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.2;
                              font-family: 'Bitter', Georgia, Times,
                                'Times New Roman', serif;
                              color: #ffffff;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 28px;
                                line-height: 1.2;
                                text-align: center;
                                font-family: Bitter, Georgia, Times,
                                  'Times New Roman', serif;
                                word-break: break-word;
                                mso-line-height-alt: 34px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 28px;"
                                >WELCOME TO SSMP</span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #f3f3f3;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 605px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f3f3;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:transparent;width:605px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:0px; padding-bottom:0px;background-color:#FFFFFF;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 605px;
                      display: table-cell;
                      vertical-align: top;
                      background-color: #ffffff;
                      width: 605px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 0px;
                          padding-bottom: 0px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 5px;
                                  padding-right: 5px;
                                  padding-bottom: 5px;
                                  padding-left: 5px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  height="0"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    height: 0px;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        height="0"
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, 'Times New Roman', serif"><![endif]-->
                        <div
                          style="
                            color: #134c75;
                            font-family: Georgia, Times, 'Times New Roman',
                              serif;
                            line-height: 1.2;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              line-height: 1.2;
                              font-size: 12px;
                              color: #134c75;
                              font-family: Georgia, Times, 'Times New Roman',
                                serif;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                text-align: center;
                                line-height: 1.2;
                                word-break: break-word;
                                font-size: 46px;
                                mso-line-height-alt: 55px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 46px;"
                                ><strong>${adminName}</strong></span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 5px; font-family: Georgia, 'Times New Roman', serif"><![endif]-->
                        <div
                          style="
                            color: #134c75;
                            font-family: 'Bitter', Georgia, Times,
                              'Times New Roman', serif;
                            line-height: 1.2;
                            padding-top: 30px;
                            padding-right: 30px;
                            padding-bottom: 5px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.2;
                              font-family: 'Bitter', Georgia, Times,
                                'Times New Roman', serif;
                              color: #134c75;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 24px;
                                line-height: 1.2;
                                text-align: center;
                                font-family: Bitter, Georgia, Times,
                                  'Times New Roman', serif;
                                word-break: break-word;
                                mso-line-height-alt: 29px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 24px;"
                                ><strong
                                  style="
                                    font-family: Bitter, Georgia, Times,
                                      'Times New Roman', serif;
                                    font-size: 24px;
                                  "
                                  >You have been </strong
                                ><span style="font-size: 24px;"
                                  ><strong>enrolled</strong></span
                                ><strong
                                  style="
                                    font-family: Bitter, Georgia, Times,
                                      'Times New Roman', serif;
                                    font-size: 24px;
                                  "
                                >
                                  as Block Admin
                                </strong></span
                              >
                            </p>
                            <p
                              style="
                                font-size: 24px;
                                line-height: 1.2;
                                text-align: center;
                                font-family: Bitter, Georgia, Times,
                                  'Times New Roman', serif;
                                word-break: break-word;
                                mso-line-height-alt: 29px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 24px;"
                                ><strong>Successfully</strong></span
                              >
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 5px; padding-bottom: 20px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #7e7e7e;
                            font-family: Open Sans, Helvetica Neue, Helvetica,
                              Arial, sans-serif;
                            line-height: 1.5;
                            padding-top: 5px;
                            padding-right: 30px;
                            padding-bottom: 20px;
                            padding-left: 30px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.5;
                              color: #7e7e7e;
                              font-family: Open Sans, Helvetica Neue, Helvetica,
                                Arial, sans-serif;
                              mso-line-height-alt: 18px;
                            "
                          >
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: center;
                                word-break: break-word;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              Click on the "ACCESS" button to open the Portal
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: center;
                                word-break: break-word;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              UserName: ${email}
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 1.5;
                                text-align: center;
                                word-break: break-word;
                                mso-line-height-alt: 21px;
                                margin: 0;
                              "
                            >
                              Password: ${password}
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <div
                          align="center"
                          class="button-container"
                          style="
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://example.com" style="height:31.5pt; width:111.75pt; v-text-anchor:middle;" arcsize="58%" stroke="false" fillcolor="#49a6e8"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:14px"><!
                          [endif]--><a
                            href="http://127.0.0.1:5501/login.html"
                            style="
                              -webkit-text-size-adjust: none;
                              text-decoration: none;
                              display: inline-block;
                              color: #ffffff;
                              background-color: #49a6e8;
                              border-radius: 24px;
                              -webkit-border-radius: 24px;
                              -moz-border-radius: 24px;
                              width: auto;
                              width: auto;
                              border-top: 1px solid #49a6e8;
                              border-right: 1px solid #49a6e8;
                              border-bottom: 1px solid #49a6e8;
                              border-left: 1px solid #49a6e8;
                              padding-top: 5px;
                              padding-bottom: 5px;
                              font-family: Open Sans, Helvetica Neue, Helvetica,
                                Arial, sans-serif;
                              text-align: center;
                              mso-border-alt: none;
                              word-break: keep-all;
                            "
                            target="_blank"
                            ><span
                              style="
                                padding-left: 25px;
                                padding-right: 25px;
                                font-size: 14px;
                                display: inline-block;
                              "
                              ><span
                                style="
                                  font-size: 16px;
                                  line-height: 2;
                                  word-break: break-word;
                                  mso-line-height-alt: 32px;
                                "
                                ><span
                                  data-mce-style="font-size: 14px; line-height: 28px;"
                                  style="font-size: 14px; line-height: 28px;"
                                  >ACCESS</span
                                ></span
                              ></span
                            ></a
                          >
                          <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                        </div>
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 20px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div
                          align="center"
                          class="img-container center autowidth"
                          style="padding-right: 0px; padding-left: 0px;"
                        >
                          <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><!
                          [endif]--><img
                            align="center"
                            alt="Image"
                            border="0"
                            class="center autowidth"
                            src="https://i.ya-webdesign.com/images/website-dividers-png-6.png"
                            style="
                              text-decoration: none;
                              -ms-interpolation-mode: bicubic;
                              height: auto;
                              border: 0;
                              width: 100%;
                              max-width: 600px;
                              display: block;
                            "
                            title="Image"
                            width="600"
                          />
                          <!--[if mso]></td></tr></table><![endif]-->
                        </div>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: #f3f3f3;">
              <div
                class="block-grid"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 605px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f3f3;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="605" style="background-color:transparent;width:605px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 605px;
                      display: table-cell;
                      vertical-align: top;
                      width: 605px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 5px;
                          padding-bottom: 5px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Georgia, 'Times New Roman', serif"><![endif]-->

                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 30px;
                                  padding-right: 10px;
                                  padding-bottom: 30px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 1px solid #dddddd;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="divider"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            min-width: 100%;
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                class="divider_inner"
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  min-width: 100%;
                                  -ms-text-size-adjust: 100%;
                                  -webkit-text-size-adjust: 100%;
                                  padding-top: 25px;
                                  padding-right: 25px;
                                  padding-bottom: 25px;
                                  padding-left: 25px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="divider_content"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-top: 0px solid transparent;
                                    width: 100%;
                                  "
                                  valign="top"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr
                                      style="vertical-align: top;"
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          -ms-text-size-adjust: 100%;
                                          -webkit-text-size-adjust: 100%;
                                        "
                                        valign="top"
                                      >
                                        <span></span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <div style="background-color: transparent;">
              <div
                class="block-grid mixed-two-up"
                style="
                  margin: 0 auto;
                  min-width: 320px;
                  max-width: 605px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:605px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="403" style="background-color:transparent;width:403px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                  <div
                    class="col num8"
                    style="
                      display: table-cell;
                      vertical-align: top;
                      min-width: 320px;
                      max-width: 400px;
                      width: 403px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 15px;
                          padding-bottom: 15px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        <!--<![endif]-->
                        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
                        <div
                          style="
                            color: #8f8f8f;
                            font-family: Open Sans, Helvetica Neue, Helvetica,
                              Arial, sans-serif;
                            line-height: 1.2;
                            padding-top: 10px;
                            padding-right: 10px;
                            padding-bottom: 10px;
                            padding-left: 10px;
                          "
                        >
                          <div
                            style="
                              font-size: 12px;
                              line-height: 1.2;
                              color: #8f8f8f;
                              font-family: Open Sans, Helvetica Neue, Helvetica,
                                Arial, sans-serif;
                              mso-line-height-alt: 14px;
                            "
                          >
                            <p
                              style="
                                font-size: 11px;
                                line-height: 1.2;
                                word-break: break-word;
                                mso-line-height-alt: 13px;
                                margin: 0;
                              "
                            >
                              <span style="font-size: 11px;"
                                >Copyright © 2020 SSMP, All rights reserved. </span
                              ><br />
                            </p>
                          </div>
                        </div>
                        <!--[if mso]></td></tr></table><![endif]-->
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td><td align="center" width="201" style="background-color:transparent;width:201px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:15px; padding-bottom:15px;"><![endif]-->
                  <div
                    class="col num4"
                    style="
                      display: table-cell;
                      vertical-align: top;
                      max-width: 320px;
                      min-width: 200px;
                      width: 201px;
                    "
                  >
                    <div style="width: 100% !important;">
                      <!--[if (!mso)&(!IE)]><!-->
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 15px;
                          padding-bottom: 15px;
                          padding-right: 10px;
                          padding-left: 10px;
                        "
                      >
                        <!--<![endif]-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="social_icons"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top;" valign="top">
                              <td
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="right"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_table"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-tspace: 0;
                                    mso-table-rspace: 0;
                                    mso-table-bspace: 0;
                                    mso-table-lspace: 0;
                                  "
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      align="right"
                                      style="
                                        vertical-align: top;
                                        display: inline-block;
                                        text-align: right;
                                      "
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 5px;
                                          padding-right: 0px;
                                          padding-left: 0;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://www.facebook.com/"
                                          target="_blank"
                                          ><img
                                            alt="Facebook"
                                            height="32"
                                            src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Facebook"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 5px;
                                          padding-right: 0px;
                                          padding-left: 0;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="http://twitter.com/"
                                          target="_blank"
                                          ><img
                                            alt="Twitter"
                                            height="32"
                                            src="https://pluspng.com/img-png/twitter-logo-png-twitter-logo-vector-png-clipart-library-518.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Twitter"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 5px;
                                          padding-right: 0px;
                                          padding-left: 0;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="http://plus.google.com/"
                                          target="_blank"
                                          ><img
                                            alt="Google+"
                                            height="32"
                                            src="https://www.freepnglogos.com/uploads/google-plus-png-logo/light-google-plus-logo-png-12.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Google+"
                                            width="32"
                                        /></a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!--[if (!mso)&(!IE)]><!-->
                      </div>
                      <!--<![endif]-->
                    </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                </div>
              </div>
            </div>
            <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
    <!--[if (IE)]></div><![endif]-->
  </body>
</html>

      `,
      // Body: `You have been registered as a School Admin and you can login by using the following credentials and Email: ${email} and Password: ${password}`,
    }).then((message) =>
      alert("Welcome Email has been Sent to the Registered Block Admin")
    );
  });

  $("#admin-name").val("");
  $("#school-id").val("");
  $("#school-name").val("");
  $("#signup-email").val("");
  $("#signup-password").val("");
}

//Display Employee Data

function displayadminData() {
  schoolDatabaseReference.on("child_added", function (tchData) {
    new_html += '<tr id="' + tchData.val().tch_id + '">';
    new_html +=
      '<td id="adminName_' +
      tchData.val().tch_id +
      '">' +
      tchData.val().adminName +
      "</td>";
    new_html +=
      '<td id="schoolId_' +
      tchData.val().tch_id +
      '">' +
      tchData.val().schoolId +
      "</td>";
    new_html +=
      '<td id="schoolName_' +
      tchData.val().tch_id +
      '">' +
      tchData.val().schoolName +
      "</td>";
    new_html +=
      '<td id="email_' +
      tchData.val().tch_id +
      '">' +
      tchData.val().email +
      "</td>";
    new_html +=
      '<td><a  class="edit" data-toggle="modal"><button class="btn btn-warning editTch"';
    new_html +=
      'data-toggle="tooltip" data-tch-id="' +
      tchData.val().tch_id +
      '" title="Edit">Edit</button></a>';
    new_html +=
      '<a style="margin-left: 10px;" class="" data-toggle="modal"><button class="btn btn-danger delete"';
    new_html +=
      'data-toggle="tooltip"  data-tch-id="' +
      tchData.val().tch_id +
      '" title="Delete">Delete</button></a>';
    new_html += "</td>";
    new_html += "</tr>";

    $("#tch-table").html(new_html);
  });
}

$(document).on("click", ".delete", function () {
  var tch_id = $(this).attr("data-tch-id");

  schoolDatabaseReference.child(tch_id).once("value", function (sch) {
    var modal_header = "";

    modal_header +=
      '<h4 class="modal-title">Delete ' + sch.val().adminName + "</h4>";
    modal_header +=
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';

    var modal_body = "";
    modal_body += "<p>Are you sure you want to delete this Record?</p>";
    modal_body +=
      '<p class="text-warning"><small>This action cannot be undone.</small></p>';
    var modal_footer = "";
    modal_footer +=
      '<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">';
    modal_footer +=
      '<input type="submit" data-dismiss="modal" data-tch-id="' +
      tch_id +
      '" class="btn btn-danger deleteTchData" value="Delete">';
    $("#deleteadminModal").find(".modal-header").html(modal_header);
    $("#deleteadminModal").find(".modal-body").html(modal_body);
    $("#deleteadminModal").find(".modal-footer").html(modal_footer);
    $("#deleteadminModal").modal();
  });
});

$(document).on("click", ".editTch", function () {
  var tch_id = $(this).attr("data-tch-id");

  schoolDatabaseReference.child(tch_id).once("value", function (sch) {
    var modal_header = "";

    modal_header +=
      '<h4 class="modal-title">Edit ' + sch.val().adminName + "</h4>";
    modal_header +=
      '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';

    var modal_body = "";
    modal_body += '<div class="form-group">';
    modal_body += "<label>admin Name</label>";
    modal_body +=
      '<input id="edit-name" type="text" value="' +
      sch.val().adminName +
      '" class="form-control" required>';
    modal_body += "</div>";
    modal_body += '<div class="form-group">';
    modal_body += "<label>School ID</label>";
    modal_body +=
      '<input id="edit-school-id" type="text" value="' +
      sch.val().schoolId +
      '" class="form-control" required>';
    modal_body += "</div>";
    modal_body += '<div class="form-group">';
    modal_body += "<label>School Name</label>";
    modal_body +=
      '<input id="edit-school-name" type="text" value="' +
      sch.val().schoolName +
      '" class="form-control" required>';
    modal_body += "</div>";
    modal_body += '<div class="form-group">';
    modal_body += "<label>Email</label>";
    modal_body +=
      '<input id="edit-email" type="text" value="' +
      sch.val().email +
      '" class="form-control" required>';
    modal_body += "</div>";

    var modal_footer = "";
    modal_footer +=
      '<input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">';
    modal_footer +=
      '<input type="submit" data-dismiss="modal" data-tch-id="' +
      tch_id +
      '"  class="btn btn-danger updateadminData" value="Save">';
    $("#editadminModal").find(".modal-header").html(modal_header);
    $("#editadminModal").find(".modal-body").html(modal_body);
    $("#editadminModal").find(".modal-footer").html(modal_footer);
    $("#editadminModal").modal();
  });
});

$(document).on("click", ".deleteTchData", function () {
  var tch_id = $(this).attr("data-tch-id");

  schoolDatabaseReference.child(tch_id).remove();

  $("#" + tch_id).remove();
});

$(document).on("click", ".updateadminData", function () {
  var tch_id = $(this).attr("data-tch-id");

  var name = document.getElementById("edit-name").value;
  var schoolId = document.getElementById("edit-school-id").value;
  var schoolName = document.getElementById("edit-school-name").value;
  var email = document.getElementById("edit-email").value;

  schoolDatabaseReference.child(tch_id).update({
    adminName: name,
    schoolId: schoolId,
    schoolName: schoolName,
    email: email,
  });

  $("#adminName_" + tch_id).html(name);
  $("#schoolId_" + tch_id).html(schoolId);
  $("#schoolName_" + tch_id).html(schoolName);
  $("#email_" + tch_id).html(email);
});
