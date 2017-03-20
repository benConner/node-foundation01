-- no.1 Provide a query showing Customers (just their full names, customer ID and country) who are not in the US
SELECT FirstName, LastName, CustomerID, Country FROM Customer WHERE Country != "USA";
-- no.2 Provide a query only showing the Customers from Brazil
SELECT * FROM Customer WHERE Country = "Brazil";
-- no.3 Provide a query showing the Invoices of customers who are from Brazil. The resultant table should show the customer's full name, Invoice ID, Date of the invoice and billing country
SELECT c.FirstName, c.LastName, c.CustomerId, c.Country, i.BillingCountry, i.InvoiceDate
FROM Customer c
LEFT JOIN Invoice i
ON c.CustomerId = i.CustomerId
WHERE Country = "Brazil";
-- no.4 Provide a query showing only the Employees who are Sales Agents
SELECT *
FROM Employee
WHERE Title
LIKE"Sales% %Agent";
-- no.5 Provide a query showing a unique list of billing countries from the Invoice table
SELECT BillingCountry
FROM Invoice
GROUP BY BillingCountry;
-- no.6 Provide a query showing the invoices of customers who are from Brazil
SELECT *
FROM Invoice i
LEFT JOIN Customer c
ON c.CustomerId = i.CustomerId
WHERE Country = "Brazil";
-- no.7 Provide a query that shows the invoices associated with each sales agent. The resultant table should include the Sales Agent's full name
SELECT e.FirstName "First Name", e.LastName "Last Name", *
FROM Invoice i
LEFT JOIN Customer c
ON c.CustomerId = i.CustomerId
LEFT JOIN Employee e
ON c.SupportRepId = e.EmployeeId;
-- no.8 Provide a query that shows the Invoice Total, Customer name, Country and Sale Agent name for all invoices and customers
SELECT  i.Total, c.FirstName "First Name", c.LastName "Last Name", c.Country e.FirstName "Agent's First Name", e.LastName "Agent's Last Name"
FROM Invoice i
LEFT JOIN Customer c
ON c.CustomerId = i.CustomerId
LEFT JOIN Employee e
ON c.SupportRepId = e.EmployeeId;
-- no.9 How many Invoices were there in 2009 and 2011? What are the respective total sales for each of those years?
SELECT strftime('%Y', InvoiceDate) Year, COUNT(InvoiceId) "Total Invoices", SUM(Total)  Total
FROM Invoice
WHERE strftime ('%Y', InvoiceDate ) = '2009'
OR strftime('%Y', InvoiceDate) = '2011'
GROUP BY strftime('%Y',InvoiceDate);
-- no.10 Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for Invoice ID 37
SELECT COUNT(InvoiceLineId)
FROM InvoiceLine
WHERE InvoiceId = 37;
-- no.11 Looking at the InvoiceLine table, provide a query that COUNTs the number of line items for each Invoice. HINT: GROUP BY
SELECT COUNT(InvoiceLineId)
FROM InvoiceLine
GROUP BY InvoiceId;
-- no.12 Provide a query that includes the track name with each invoice line item
SELECT i.InvoiceLineId "Invoice Line", t.Name
FROM InvoiceLine i
LEFT JOIN Track t
ON i.TrackId = t.TrackId;
-- no.13 Provide a query that includes the purchased track name AND artist name with each invoice line item.
SELECT i.InvoiceLineId "Invoice Line", t.Name
FROM InvoiceLine i
LEFT JOIN Track t
ON i.TrackId = t.TrackId;
