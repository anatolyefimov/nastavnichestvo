from django.contrib.auth.models import User
from django.http import HttpResponse
import json

import json

def register(request): 
    req = json.loads(request.body)
    res = {
        'status': 'ok'
    }

    user = User.objects.get(username=req.username)
    if user is not None:
        res['status'] = 'already exists'
    res = json.dumps(res)

     return HttpResponse(res, content_type='application/json')