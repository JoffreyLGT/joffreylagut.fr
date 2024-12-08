---
title: "ClassiNet"
description: AI-Powered Product Categorization with a Robust .NET Backend and an Interactive Angular Dashboard.
pubDate: 2024-12-03
updatedDate: 2024-12-03
heroImage: ./assets/classinet-hero.png
badge: Web
tags:
- web
- frontend
- backend
- csharp
- typescript
- "machine learning"
---

## Project sheet

| Label | Information |
| --- | --- |
| State | In development |
| Team | Solo dev |
| Source Code | [Github](https://github.com/JoffreyLGT/ClassiNet) |

## Table of content
- [Objective](#objective)
- [Context](#context)
- [Requirements](#requirements)
- [Features](#features)
- [Technical environment](#technical-environment)
- [Conclusion and technical overview](#conclusion-and-technical-overview)


## Objective

ClassiNet is a specialized tool designed to automate and optimize product categorization processes using advanced machine learning techniques. 
The project focuses on streamlining the classification of products into predefined categories, addressing the challenges of managing diverse and extensive product inventories. 

By leveraging neural networks and data-driven algorithms, ClassiNet provides a reliable, scalable solution to ensure accurate and consistent categorization. This innovation is particularly valuable for e-commerce platforms, inventory management systems, and businesses seeking to enhance efficiency in organizing their product offerings. 

With ClassiNet, the complex task of product categorization is transformed into a seamless, automated experience, showcasing the power of AI in solving real-world challenges.


## Context

Last year, I developed [Reagan, an online store product classification platform](/projects/reagan-online-store-product-classification-platform), during my Master’s degree in AI. Reagan was implemented in Python, the primary programming language for DataScience. Having spent 8 years working with .NET, I closely followed Microsoft’s technological advancements, particularly their ambition to unify the ecosystem into a single .NET platform capable of running on major operating systems.

Among the numerous libraries released by Microsoft, ML.NET captured my attention. ML.NET enables .NET developers to train and use machine learning models, while also supporting TensorFlow models.

After a year of working in Python, I decided to return to .NET and experiment by creating a service similar to Reagan. This new platform would leverage .NET 9 for the backend and Angular for the dashboard.


## Requirements

-	API and scripts: must be written in .NET 9 (C#), including the deep learning model.
-	Front end: must be developed using Angular 19.

## Features

- **API:**
  - RESTful API.
  - Fully documented using OpenAPI (Swagger) and JSON Schema standards.
- **Pre-trained Machine Learning models:**
  - Trained on a dataset of 84,000 products across 17 categories.
- **Dashboard capabilities:**
  - **User management:** Administrative features for managing users.
  - **Product management:** CRUD operations for product data.
  - **Data visualization:** Graphs and charts to provide insights into product data.
  - **Model information:** Details about the machine learning model, data processing pipeline and training process.
  - **Performance monitoring:** Metrics to track the model’s accuracy and efficiency over time.

## Technical environment

- **API:**
  - Framework: .NET 9
  - ORM: Entity Framework Core
  - Authentication: AspNetCore Identity with JWT
  - Database: PostgreSQL
- **Machine learning:**
  - Library: ML.NET
- **Dashboard:**
  - Framework: Angular 19
  - UI libraries: daisyUI, TailwindCSS
  - Illustrations: Remix Icon, Undraw

## Conclusion and technical overview

This project demonstrates the versatility of .NET 9 in handling modern machine learning tasks while maintaining a robust backend and an interactive frontend. By combining cutting-edge technologies like ML.NET and Angular, this platform serves as a powerful tool for product classification and management in e-commerce environments.
