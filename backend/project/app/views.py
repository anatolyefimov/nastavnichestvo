from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from django.core.exceptions import ObjectDoesNotExist

import json

import json

@csrf_exempt
def register(request): 
    print(request.session)
    req = json.loads(request.body)
    res = {
        'status': 'already exists'
    }
    try:
        user = User.objects.get(username=req['username'])
    except ObjectDoesNotExist:
        res['status'] = 'ok';
    
    if (res['status'] == 'ok'):
        User.objects.create_user(req['username'], req['username'], req['password'])
    
    res = json.dumps(res)

    return HttpResponse(res, content_type='application/json')

@csrf_exempt
def login(request):
    req = json.loads(request.body)
    print(req)
    res = {
        'status': 'ok'
    }
    
    user = authenticate(username=req['username'], password=req['password'])
    if user is None:
        res['status'] = 'ivalid username or password'
    else:
        request.session['member_id'] = user.id
        res['user_id'] = user.id
        
    res = json.dumps(res)

    return HttpResponse(res, content_type='application/json')

