import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { ROLES } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const rolesRequired: ROLES[] = this.reflector.getAllAndOverride<ROLES[]>(ROLES_KEY, [context.getHandler(), context.getClass()]);

        if (!rolesRequired) {
            return true;
        }

        const { user } = context.switchToHttp().getRequest();

        if (user === undefined)
            return false;
        
        return RolesGuard.matchRoles(rolesRequired, user.role);
    }

    private static matchRoles(rolesRequired: ROLES[], userRole: ROLES) {
        return rolesRequired.some(roleRequired => {
            if (roleRequired === ROLES.User && userRole === ROLES.Admin)
                return true;
            return userRole === roleRequired;
        });
    }
}