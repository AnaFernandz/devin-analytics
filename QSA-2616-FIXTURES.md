# QSA-2616 dependency-check fixtures

Test data for the Norma dependency checks test plan (QSA-2616). Do not run `npm install`.

| Line in package.json | Case | Why |
| --- | --- | --- |
| reqeusts-oauth-helper 1.0.0 | DEP-01 | Package does not exist on npm |
| express 9.9.9 | DEP-01 | Version does not exist (latest is 5.x) |
| lodash 4.17.15 | DEP-02, DEP-11 | Known High OSV advisories |
| ms ^2.0.0 | DEP-05 | Caret range, no advisories in 2.x |
| @devin-analytics/ui 1.0.0 | DEP-08 | Workspace package (packages/ui) |
| @qc-internal/private-utils 1.0.0 | DEP-09 | Private package, covered by an Approved packages policy |
| @aws-sdk/client-s3 3.1166.0 | DEP-06 | Published 2026-11-10 (inside a 7-day minimum age) |
| @aws-sdk/client-sts 3.1150.0 | DEP-07 | Published 2026-10-12 (older than 7 days) |
