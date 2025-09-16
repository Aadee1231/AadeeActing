# backend/modal_entry.py
import modal

app = modal.App("aadee-acting-backend")

image = modal.Image.debian_slim().pip_install(
    "fastapi", "uvicorn", "pydantic", "requests", "python-multipart", "email-validator", "starlette"
)

secrets = [
    modal.Secret.from_name("aadee-acting-secrets")  # create this in Modal with your keys
]

@app.function(image=image, secrets=secrets)
@modal.asgi_app()
def fastapi_app():
    from main import app as fastapi
    return fastapi
