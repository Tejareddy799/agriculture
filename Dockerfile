# Use the official Python 3.9 slim image
FROM python:3.9-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose port 5000
EXPOSE 5000

# Run the Flask application using Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:5000", "app:app"]
