import csv
from faker import Faker
import random
from datetime import datetime, timedelta

fake = Faker()

def generate_users(num_users):
    users = []
    for _ in range(num_users):
        user = {
            'id': fake.random_number(digits=5),
            'password': fake.password(),
            'last_login': fake.date_time_between(start_date='-1y', end_date='now'),
            'is_superuser': random.choice([True, False]),
            'username': fake.user_name(),
            'last_name': fake.last_name(),
            'email': fake.email(),
            'is_staff': random.choice([True, False]),
            'is_active': random.choice([True, False]),
            'date_joined': fake.date_time_between(start_date='-2y', end_date='-1y'),
            'first_name': fake.first_name(),
        }
        users.append(user)
    return users

# Generar 200 usuarios
num_users = 200
users = generate_users(num_users)

# Guardar los usuarios en un archivo CSV
csv_file = 'usuarios.csv'
with open(csv_file, mode='w', newline='') as file:
    fieldnames = ['id', 'password', 'last_login', 'is_superuser', 'username', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined', 'first_name']
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    
    writer.writeheader()
    for user in users:
        writer.writerow(user)

print(f'Se han guardado {num_users} usuarios en el archivo {csv_file}.')
