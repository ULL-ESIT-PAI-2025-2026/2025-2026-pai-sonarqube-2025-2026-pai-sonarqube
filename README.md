[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/eaOBRCSQ)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=23117413&assignment_repo_type=AssignmentRepo)
## PAI class Presentation 
### To be used for works to be exposed in class sessions

This directory is organised as follows:

      .
      ├── bib          # Presentation bibliography and references
      ├── slides       # slides of your presentation 
      ├── src          # Source code 
      

# SonarQube: The Gold Standard for Continuous Inspection 🚀

![SonarQube Logo](https://raw.githubusercontent.com/SonarSource/sonarqube/master/docs/logo.png)

## Overview
**SonarQube** is an open-source platform developed by SonarSource for continuous inspection of code quality. It performs automatic reviews with static analysis of code to detect bugs, vulnerabilities, and code smells in over 30 programming languages.

The goal of SonarQube is to empower developers to write **Clean Code** and manage **Technical Debt** effectively within the DevOps lifecycle.

---

## Key Concepts

### 1. The Three Pillars of Analysis
*   **Bugs:** Functional errors that will break the code or cause incorrect behavior.
*   **Vulnerabilities:** Security flaws that could be exploited by attackers (SQL Injection, Cross-Site Scripting, etc.).
*   **Code Smells:** Maintainability issues that make the code difficult to read, test, or evolve.

### 2. Quality Gates 
A **Quality Gate** is a set of threshold-based conditions that a project must meet before it can be merged or deployed. 
- **Green:** Meets all standards.
- **Red:** Fails to meet requirements (e.g., "New code coverage must be > 80%").

### 3. "Clean as You Code" Methodology
Instead of focusing on fixing thousands of old issues, this philosophy focuses on ensuring that **new code** added to the project is always healthy. Over time, this naturally improves the overall quality of the software.

---

## SonarQube vs. Traditional Linters

| Feature | Linter (ESLint, Pylint) | SonarQube |
|---------|-------------------------|-----------|
| **Scope** | Single file analysis | Full project & cross-file analysis |
| **Focus** | Syntax & Formatting | Logic, Security & Architecture |
| **History** | No historical tracking | Full version history & trend charts |
| **Complexity** | Basic patterns | Deep data-flow analysis (SAST) |

---

## Enterprise Architecture
A standard SonarQube setup consists of:
1.  **SonarScanner:** The tool that runs on the build server to analyze the source code.
2.  **SonarQube Server:**
    *   **Web Server:** Provides the UI for developers and managers.
    *   **Search Engine:** Based on Elasticsearch for fast results.
    *   **Compute Engine:** Processes analysis reports.
3.  **Database:** (PostgreSQL/SQL Server) To store metrics, history, and project settings.

---

## Why Use SonarQube in Organizations?
- **Risk Mitigation:** Reduces the chance of security breaches.
- **Cost Reduction:** Finding bugs during development is 10x cheaper than finding them in production.
- **Standardization:** Ensures all team members follow the same quality rules.
- **CI/CD Integration:** Integrates seamlessly with Jenkins, GitHub Actions, Azure DevOps, and GitLab CI.

---
> *This documentation was prepared for the ULL.*
> **Group Members:** Andrés, Cristhian, and Lucas.