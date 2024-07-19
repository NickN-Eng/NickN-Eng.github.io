---
title: "Linear regression with gradient descent"
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - Post Formats
  - readability
  - standard
---

## Multivariate Case

I am not good with vector calculus, so my approach to

> Remember the notation throughout:
> Inputs/features: $i = 1\to N$
> Training examples/observations: $j = 1 \to M$

### The model

The model accounts for multiple input variables:

$$
\hat{y} = b + \sum_{i=1}^N w_i x_i
$$

- For every feature/input $x$ there is a weight $w$
  - Features are the input variables used to make a prediction
  - $i = 1\to N$ is the range of input features
- $b$ is the bias term (intercept).

### Loss function

The cost function (mean squared error) for the dataset is given by:
$$ L(\mathbf{W}, b) = \frac{1}{2M} \sum\_{j=1}^{M} \left( \hat{y}\_j - y_j \right)^2 $$
where:

- $M$ is the number of training examples
- $\hat{y}_{j} = b + \sum_{i=1}^N w_i x_i$ is the predicted output for the $j^{th}$ training example,
- $y_j$ is the actual output for the $j$-th training example.

The loss function can also be written with an **error term**: $e_j = \hat{y}_{j} - y_j$.
$$ L(\mathbf{W}, b) = \frac{1}{2M} \sum\_{j=1}^{M} \left( e_i \right)^2 $$

### Gradient descent

To minimize the loss function $L(w, b)$, use gradient descent:

- **Differentiate the loss** function $\nabla L(w, b)$
- Update the weights/bias by take a small step in the negative gradient
- Repeat and update iteratively

1. **Gradient with respect to the each weight $w$:** - Apply the chain rule to differentiate with respect to w.

   $$
   \begin{align*}
   \frac{\partial L(w, b)}{\partial \mathbf{W}} &= \frac{\partial }{\partial \mathbf{W}}
   \left(\frac{1}{2M} \sum_{j=1}^{M} \left( e_j \right)^2 \right)
   \\\\
   \text{Split into} & \text{ inner/outer parts for chain rule:}
   \\
   &L = {e_j}^2
   &&\quad e_i = \hat{y}_{j} - y_j = b + w_j x_j - y
   \\
   & \frac{\partial L }{\partial e} = 2 e_j
   && \quad \frac{\partial e }{\partial w} = x_j
   \\
   \text{Applying } & \text{the chain rule by } \frac{\partial L }{\partial e} \cdot \frac{\partial e }{\partial w}
   \\
   \frac{\partial L(\mathbf{W}, b)}{\partial \mathbf{W}}
   &= \frac{1}{2N} \sum_{j=1}^{N} 2 e_j \cdot x_j
   = \underbrace{\frac{1}{M} \sum_{j=1}^{M} e_j \mathbf{x}_j }_{\text{the result!}}
   \end{align*}
   $$

2. **Gradient with respect to the bias $b$:**
   - Also apply the chain rule, but this is easier because $\frac{\partial e }{\partial b} = 1$
     $$
     \frac{\partial L(w, b)}{\partial b} = \frac{1}{N} \sum\_{j=1}^{N} e^{j}
     $$

The gradients are used to update the weights and bias. The update rules are:

For each $i=1 \to N$ **input variable/weight**, update each weight by doing a summation on each piece of training data $j = 1 \to M$:

$$
w_i = w_i - \alpha \frac{\partial L(w, b)}{\partial w} = w_i - \alpha \cdot \frac{1}{M} \sum{j=1}^{M} e_j x_j
$$

$$
b = b - \alpha \frac{\partial L(\mathbf{W}, b)}{\partial b} = b - \frac{1}{M} \sum_{j=1}^{M} e_j
$$

where $\alpha$ is the learning rate.

In python, the **weight & bias update** can be implemented as per the below:
Where `x1`, `x2`, `xi`, `y`, `y_pred` are **column vectors**

- Vector long as the number observations
  Weights are float values: `w1`, `w2`, `wi`,

```python
# weights: w1, w2, wi, b
for i in range(iterations):
	# The current predicted value of Y
    y_pred = b + w1 * x1 + w2 * x2 + wi * xi ...

    # For the first weight (i = 1)
    D_w1 = (-2 / n) * sum(x1 * (y - y_pred))  # Derivative wrt w_1
    w1 = w1 - eta * D_w1  # Update w_1

	# For the second weight (i = 2)
    D_w2 = (-2 / n) * sum(x2 * (y - y_pred))  # Derivative wrt w_2
    w2 = w2 - eta * D_w2  # Update w_2

	# For each weight i, in some loop i =....
    D_wi = (-2 / n) * sum(xi * (y - y_pred))  # Derivative wrt w_i
    wi = wi - eta * D_w2  # Update w_i

	# For the bias
    D_b = (-2 / n) * sum(y - y_pred)  # Derivative wrt b
    b = b - eta * D_b  # Update b
```

## Converting to matrix form

### The model

$$
\hat{\mathbf{y}} = \mathbf{Xw} + b
$$

Where:

- $\hat{\mathbf{y}}$ is an $M \times 1$ vector of predicted outputs,
- $\mathbf{X}$ is an $M \times N$ matrix where each row represents an observation (M) and each column represents a feature/input variable (N)
- $\mathbf{w}$ is a $N \times 1$ vector of weights,
- $b$ is the bias term (scalar).
  J is number of inputs
  N in is number of observations.
  Bold means it is a vector.

Given:

$$
\underbrace{\mathbf{X}}_{examples} =
\underbrace{\begin{bmatrix}
x_{11} & x_{12} & \cdots & x_{1N} \\
x_{21} & x_{22} & \cdots & x_{2N} \\
\vdots & \vdots & \ddots & \vdots \\
x_{M1} & x_{M2} & \cdots & x_{MN}
\end{bmatrix}}_{\text{per feature/input } i = 1 \to N}
\left. \vphantom{
\begin{array}{c} row1\\row2\\\vdots\\row3\end{array}}\right\}
\text{per observ. } j =1\to M
$$

$$
\quad
\mathbf{w} =
\begin{bmatrix}
w_1 \\w_2 \\\vdots \\w_J
\end{bmatrix}
\left. \vphantom{
\begin{array}{c} row1\\row2\\\vdots\\row3\end{array}}
\right\}\text{per feature}
,
\quad
\hat{\mathbf{y}} =
\begin{bmatrix}
\hat{y}_1 \\
\hat{y}_2 \\
\vdots \\
\hat{y}_N
\end{bmatrix}
\left. \vphantom{
\begin{array}{c} row1\\row2\\\vdots\\row3\end{array}}
\right\}\text{per observation}
$$

The matrix multiplication $\mathbf{Xw}$ can be expanded as:

$$
\mathbf{Xw} =
\begin{bmatrix}
x_{11} & x_{12} & \cdots & x_{1N} \\
x_{21} & x_{22} & \cdots & x_{2N} \\
\vdots & \vdots & \ddots & \vdots \\
x_{M1} & x_{M2} & \cdots & x_{MN}
\end{bmatrix}
\begin{bmatrix}
w_1 \\
w_2 \\
\vdots \\
w_N
\end{bmatrix}
=
\begin{bmatrix}
x_{11}w_1 + x_{12}w_2 + \cdots + x_{1N}w_N \\
x_{21}w_1 + x_{22}w_2 + \cdots + x_{2N}w_N \\
\vdots \\
x_{M1}w_1 + x_{M2}w_2 + \cdots + x_{MN}w_N
\end{bmatrix}
$$

Adding the bias term $b$:

$$
\hat{\mathbf{y}} = \mathbf{Xw} + b =
\begin{bmatrix}
x_{11}w_1 + x_{12}w_2 + \cdots + x_{1J}w_J + b \\
x_{21}w_1 + x_{22}w_2 + \cdots + x_{2J}w_J + b \\
\vdots \\
x_{N1}w_1 + x_{N2}w_2 + \cdots + x_{NJ}w_J + b
\end{bmatrix}
$$

## Gradient descent

So we need to implement the formulae below for every weight $i = 1 \to N$:

For ONE weight/feature ($w_{i=1}$):

$$
\mathbf{x}_{i=1} = \begin{bmatrix}x_1 \\x_2 \\\vdots \\x_M\end{bmatrix}
\quad
\mathbf{e} = \begin{bmatrix}e_1 \\e_2 \\\vdots \\e_M\end{bmatrix}
\quad
$$

The vectorised form of $\sum_{j=1}^{M} e_j \cdot x_{i=1,j}$ can be vectorised as a dot product, or ${\mathbf{x}_{i=1}}^T \mathbf{e}$, because it results in **elementwise multiplication and summation**:

$$
\sum_{j=1}^{M} e_j x_j
=  \mathbf{x}^T \mathbf{e} =
\begin{bmatrix}x_1 & x_2 & \cdots & x_M\end{bmatrix}
\begin{bmatrix}e_1 \\e_2 \\\vdots \\e_M\end{bmatrix}
$$

Using this within the gradient descent update formula, we get:
...this is for the first weight ($w_{i=1}$) only.

$$
\begin{align*}
w_{i=1} &= w_{i=1} - \alpha \cdot \frac{1}{M} \sum_{j=1}^{M} e_j \cdot x_{i=1,j}  \\
&=  w_{i=1} - \alpha \cdot \frac{1}{M} \cdot \mathbf{x}^T \mathbf{e} \\
&=   w_{i=1} - \alpha \cdot \frac{1}{M} \cdot \begin{bmatrix}x_{j=1} & x_{j=2} & \cdots & x_{j=M}\end{bmatrix}
\begin{bmatrix}e_{j=1} \\e_{j=2} \\\vdots \\e_{j=M}\end{bmatrix}
= [w_{i=1}]
\end{align*}
$$

If we want to do this for all input features at once, we can expand the number of **columns of** $\mathbf{X}$! Where: $\mathbf{x}_{i=1 \to N} = \mathbf{X}$
Columns representing input features of $\mathbf{X}$ $\to$ rows of $\mathbf{X}^T$ :

$$
\mathbf{X} = \begin{bmatrix}
x_{11} & \cdots \text{more} \cdots & x_{1N} \\
x_{21} & \cdots \text{input} \cdots & x_{2N} \\
\vdots &  \ddots & \vdots \\
		x_{M1} &  \cdots \text{vars} \cdots & x_{MN}
\end{bmatrix},
\quad
\mathbf{X}^T =
\underbrace{
\begin{bmatrix}
x_{11} & x_{21} & \cdots & x_{M1} \\
\vdots & \vdots &  \ddots & \vdots \\
\vdots & \vdots &  \ddots & \vdots \\
x_{1N} &  x_{2N} & \cdots & x_{MN}
\end{bmatrix}}_{\text{per observation}}
\left. \vphantom{
\begin{array}{c} row1\\\vdots\\\vdots\\row3\end{array}}\right\}
\text{per input}
$$

So the weight update function becomes:

$$
\begin{bmatrix}w_1 \\w_2 \\\vdots \\w_J\end{bmatrix}
=\begin{bmatrix}w_1 \\w_2 \\\vdots \\w_J\end{bmatrix}
- \alpha \cdot \frac{1}{M}
\begin{bmatrix}
x_{11} & x_{21} & \cdots & x_{M1} \\
\vdots & \vdots &  \ddots & \vdots \\
\vdots & \vdots &  \ddots & \vdots \\
x_{1N} &  x_{2N} & \cdots & x_{MN}
\end{bmatrix}
\begin{bmatrix}e_1 \\ \vdots \\ \vdots \\e_M\end{bmatrix}
$$

$$
\mathbf{w} = \mathbf{w} - \alpha \cdot \frac{1}{M}\mathbf{X}^T \mathbf{e}
$$

In python, this can be written as:

```python
for i in range(iterations):
    # write your code here
    y_pred = X @ w  # The current predicted value of Y
    D_w = -(2 / n) * X.T @ (y - y_pred)  # Derivative wrt beta
    w = w - alpha * D_w  # Update beta
```

$$
$$
