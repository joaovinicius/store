import { IAuthentication } from '../../../Domain/Authentication/Authentication/IAuthentication'
import {  Repository as AuthenticationRepository } from '../../../BoundedContext/Authentication/Repository'
import { Knex } from 'knex'

export default class PostgresRepository implements AuthenticationRepository {
    table = 'user'
    sqlClient: Knex.QueryBuilder

    constructor(sqlClient: Knex) {
        this.sqlClient = sqlClient(this.table)
    }

    checkIfUserExists(payload:IAuthentication){
        return this.sqlClient
            .where('email', '=', payload.email)
            .andWhere('tenant_id', '=', payload.tenantId)
            .first()
    }
    
}