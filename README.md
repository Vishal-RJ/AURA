<div align="center">

# ✦ A.U.R.A.
### Agentic User Retention Assistant

**Empowering Telecoms with Agentic Intelligence to Predict, Reason, and Act before a Customer Leaves.**

![Hero Banner](assets/screenshot_hero.png)

[![RMKEC](https://img.shields.io/badge/RMKEC-ECE%203rd%20Year-blue?style=for-the-badge&logo=graduation-cap)](.)
[![ML Model](https://img.shields.io/badge/Accuracy-85%25-brightgreen?style=for-the-badge&logo=scikit-learn)](.)
[![Dashboard](https://img.shields.io/badge/UI/UX-White%20%26%20Orange-orange?style=for-the-badge)](.)
[![XAI](https://img.shields.io/badge/XAI-Doughnut%20Analytics-purple?style=for-the-badge)](.)
[![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [The Problem](#-the-problem)
- [Objectives](#-objectives)
- [Proposed Solution](#-proposed-solution)
- [Interactive Company Dashboard](#-interactive-company-dashboard)
- [System Architecture](#-system-architecture)
- [Dataset & Features](#-dataset--features)
- [Machine Learning Model](#-machine-learning-model)
- [Explainable AI (XAI)](#-explainable-ai-xai)
- [Retention Decision Engine](#-retention-decision-engine)
- [Domain-Specific LLM (SLM)](#-domain-specific-llm-slm)
- [Conclusion & Roadmap](#-conclusion--roadmap)
- [Team](#-team)
- [Running Locally](#-running-locally)

---

## 🌐 Overview

**A.U.R.A.** (Agentic User Retention Assistant) is an **end-to-end AI-powered churn prediction and retention platform** designed for the telecom industry. 

The project has been recently upgraded with **Advanced Motion Graphics** and a **Neural Network Visualization** on the landing page to represent the agentic intelligence core.

Unlike traditional systems that act only after a customer has already left, A.U.R.A. predicts churn **30+ days in advance**, explains the reasoning behind every prediction using XAI, and automatically triggers personalized retention actions — all without human delay.

---

## 🔴 The Problem

| Pain Point | Description |
|---|---|
| 📉 **30% Annual Churn** | Telecom companies face massive annual churn due to aggressive pricing and network instability |
| ⏰ **Reactive Post-Mortem** | Traditional systems identify churn *after* SIM deactivation — recovery is impossible |
| 🎯 **No Personalization** | Generic "one-size-fits-all" offers fail to address individual customer pain points |
| 💸 **Revenue Erosion** | Acquiring a new customer is **5× more expensive** than retaining an existing one |

---

## 🏗️ Interactive Company Dashboard

We have implemented a **White & Orange Premium Operator Dashboard** (v2.0) designed for senior telecom operators.

![Dashboard Interface](assets/screenshot_dashboard.png)

### ✦ Core Modules
- **Risk Overview:** A card-based monitoring system where operators can view high-priority churn clusters.
- **Doughnut Distribution Analytics:** Real-time visualization of churn drivers (Network, Pricing, Billing) using high-fidelity doughnut graphs.
- **Autonomous Action Logs:** A live gateway tracking every automated retention action (Vouchers, Boosts, SLM Messages) triggered by AURA.
- **SLM Messaging Portal:** Direct interface for the domain-specific language model to generate hyper-personalized retention messages via SMS/Email.

---

## 🎯 Objectives

- **Early Detection** — Predict high-risk customers at least **30 days** before they decide to leave.
- **Granular Analysis** — Isolate technical (network), financial (billing), or competitive churn drivers.
- **Automated Intervention** — Close the loop between data insights and marketing actions *without human delay*.
- **Customer Lifetime Value** — Maximize long-term revenue by improving brand loyalty and satisfaction.

---

## 🏗️ System Architecture

```
📡 Data Ingestion  ──▶  🧠 ML Core  ──▶  🔎 Explainability  ──▶  🚀 Action Gateway
```

| Layer | Component | Role |
|---|---|---|
| **01** | Data Ingestion | High-speed processing of usage logs, billing history & support tickets |
| **02** | ML Core | Feature engineering + ensemble boosted decision trees (XGBoost + RF) |
| **03** | Explainability | SHAP/LIME decodes the AI "Black Box" into human-readable churn drivers |
| **04** | Action Gateway | API-driven triggers pushing notifications, SMS, or vouchers to the user |

---

## 🤖 Machine Learning Model

A **Multi-Stacked Ensemble** architecture optimized for real-world imbalanced telecom datasets:

- **XGBoost + Random Forest** — stacked ensemble for robust prediction.
- **Custom Transformer** — processes 50+ time-series features.
- **SMOTE** (Synthetic Minority Over-sampling Technique) to fix class imbalance.
- **Weekly Feedback Loops** — automatic retraining to adapt to market changes.

```
🎯  Prediction Accuracy: 85%+
📅  Detection Window:    30 days before churn
🔁  Retraining Cadence:  Weekly
```

---

## 🔍 Explainable AI (XAI)

| Technique | What It Does |
|---|---|
| **Custom SHAP Integration** | Maps ML outputs into human-readable "Churn Drivers" |
| **Local Insights** | Explains *why a specific user* is at risk of leaving |
| **Global Insights** | Identifies *network-wide* failures affecting many users at once |
| **Reasoning Bridge** | SHAP output feeds the custom SLM for personalized message generation |

---

## 🗣️ Domain-Specific LLM (SLM)

A lightweight **Small Language Model** fine-tuned exclusively on telecom data:

- **Knowledge Distillation** — compressed from larger models into an edge-deployable SLM.
- **Domain Tuning** — trained on telecom plans, network terminology, and customer service logs.
- **100% Data Sovereignty** — customer data never leaves the local secure environment.

---

## 👥 Team

> **Team A.U.R.A.** — RMKEC, 3rd Year

| Member | Role |
|---|---|
| **RJ Vishal** | Team Lead / ML Architecture |
| **Nivedhitha** | Data Engineering & Features |
| **Harris** | XAI & Explainability Layer |
| **Ganthimathi V** | SLM & Action Gateway |

---

## 🖥️ Running Locally

```bash
# Clone the repo
git clone https://github.com/Vishal-RJ/AURA.git
cd AURA

# View Landing Page with Motion Graphics
start index.html

# View Company Operator Dashboard (Latest v2.0)
start dashboard.html
```

No dependencies. Pure HTML + CSS + JavaScript.

---

<div align="center">

**Made with ❤️ by Team A.U.R.A. · RMKEC**

</div>
