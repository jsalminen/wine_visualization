# Load libraries
library(reshape2)

# Load original data set
wines <- read.csv("data/wineQualityReds.csv", header = T)

# Add new quality descriptor
wines$class <- "Poor"
wines$class[wines$quality >= 5] <- "Mediocre"
wines$class[wines$quality >= 7] <- "Good"

# Select columns to scale
wines_scaled <- subset(wines, select = c(fixed.acidity, volatile.acidity, 
                                       citric.acid, free.sulfur.dioxide, 
                                       total.sulfur.dioxide, sulphates,
                                       alcohol))
# Scale data
wines_scaled <- scale(wines_scaled)

# Add quality metrics
wines_scaled <- cbind(wines_scaled, wines[, c("quality", "class")])

# Melt data frame
wines_melt <- melt(wines_scaled, id.vars = c("quality", "class"))
levels(wines_melt$variable) <- c("Fixed acidity", "Volatile acidity", 
                                 "Citric acid", "Free sulfur dioxide",
                                 "Total sulfur dioxide", "Sulphates", 
                                 "Alcohol")

# Save new wine data
write.csv(wines_melt, "data/wineQualityRedsUpdate.csv", row.names = FALSE)
