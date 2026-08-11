from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

from .models import ContactMessage


def home(request):
    return render(request, 'base.html')


def contact(request):

    if request.method == "POST":

        name = request.POST.get("name").strip()
        email = request.POST.get("email").strip()
        subject = request.POST.get("subject").strip()
        message = request.POST.get("message").strip()

        # Validate email
        try:
            validate_email(email)
        except ValidationError:
            messages.error(request, "Please enter a valid email address.")
            return redirect("/#contact")

        # Save message
        ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        messages.success(request, "Your message has been sent successfully!")

        return redirect("/#contact")

    return redirect("/#contact")