# Use Python 3 as the base image
FROM python:3.11

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Copy the rest of the Django app files
COPY . .

# Set the environment variable for Django settings
ENV DJANGO_SETTINGS_MODULE=backend.settings

# Run Django collectstatic command (skip input)
RUN python manage.py collectstatic --noinput

# Expose the port (Heroku will still use the $PORT environment variable)
EXPOSE 8000

# Start the Django server using the $PORT environment variable, default to 8000 if not set
CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:${PORT:-8000}"]