from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import os
import requests

RESEND_API_KEY = os.getenv('RESEND_API_KEY')
TO_EMAIL = os.getenv('TO_EMAIL', 'you@example.com')
FROM_EMAIL = os.getenv('FROM_EMAIL', 'portfolio@yourdomain.com')

app = FastAPI()

origins = [
    os.getenv('FRONTEND_ORIGIN', 'http://localhost:5173'),
    os.getenv('PROD_ORIGIN', 'https://aadeeacting.vercel.app'),
    os.getenv('PROD_ORIGIN', 'https://aadeec.com'),
    os.getenv('PROD_ORIGIN_ALT', 'https://www.aadeec.com')
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

class Contact(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post('/api/contact')
async def contact(c: Contact):
    html = f"""
      <h2>New portfolio message</h2>
      <p><b>Name:</b> {c.name}</p>
      <p><b>Email:</b> {c.email}</p>
      <p><b>Message:</b><br/>{c.message}</p>
    """
    r = requests.post(
        'https://api.resend.com/emails',
        headers={'Authorization': f'Bearer {RESEND_API_KEY}', 'Content-Type': 'application/json'},
        json={
            'from': FROM_EMAIL,
            'to': [TO_EMAIL],
            'subject': 'New message from acting site',
            'html': html
        }
    )
    r.raise_for_status()
    return {'ok': True}
