Projekt bazy danych

```
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Nickname VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Role ENUM('user', 'admin') NOT NULL DEFAULT 'user'
);
```

```
CREATE TABLE Invites (
    InviteID INT AUTO_INCREMENT PRIMARY KEY,
    Code VARCHAR(12) NOT NULL UNIQUE,
    CreatedBy INT,
    ExpiryDate DATETIME NOT NULL,
    FOREIGN KEY (CreatedBy) REFERENCES Users(UserID)
);
```

```
CREATE TABLE Offers (
    OfferID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    CreatedByID INT,
    CreatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PhotoURL VARCHAR(255),
    Description TEXT,
    RevenueEarned DECIMAL(10, 2),
    FOREIGN KEY (CreatedByID) REFERENCES Users(UserID)
);

```
