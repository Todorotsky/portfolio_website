# Use Python 3 as the base image
FROM python:3.11

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt ./
RUN pip install -r requirements.txt

# Copy the rest of the Django app files
COPY . .

# Collect static files (if using)
RUN python manage.py collectstatic --noinput

# Expose the port to be used by Heroku
EXPOSE $PORT

# Start the Django server using the environment variable $PORT
CMD ["sh", "-c", "python manage.py runserver 0.0.0.0:$PORT"]
